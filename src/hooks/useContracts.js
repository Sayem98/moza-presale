import { BrowserProvider, Contract, formatUnits, parseUnits } from "ethers";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";

import {
  TOKEN_CONTRACT_ADDRESS,
  PRESALE_CONTRACT_ADDRESS,
  USDT_CONTRACT_ADDRESS,
  USDC_CONTRACT_ADDRESS,
  TOKEN_ABI,
  PRESALE_ABI,
} from "../contracts/contract";

function useContract() {
  const { walletProvider } = useWeb3ModalProvider();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const getProvider = () => {
    return new BrowserProvider(walletProvider);
  };
  const getSigner = async (provider) => {
    return provider.getSigner();
  };

  const getContract = async (address, abi, signer) => {
    const contract = new Contract(address, abi, signer);
    return contract;
  };

  const buy = async (paymentType, amount) => {
    console.log(paymentType, amount);
    const provider = getProvider();
    const signer = await getSigner(provider);
    // print singer address
    const contract = await getContract(
      PRESALE_CONTRACT_ADDRESS,
      PRESALE_ABI,
      signer
    );

    if (paymentType === "BNB") {
      const transaction = await contract.buyFromNative(
        "0x0000000000000000000000000000000000000000",
        {
          value: parseUnits(amount.toString(), 18),
        }
      );
      const receipt = await transaction.wait();
      return receipt;
    } else if (paymentType === "USDT") {
      const usdt = await getContract(USDT_CONTRACT_ADDRESS, TOKEN_ABI, signer); // usdt contract
      const transaction = await usdt.approve(
        // approving usdt contract
        PRESALE_CONTRACT_ADDRESS,
        parseUnits(amount.toString(), 18)
      );
      await transaction.wait();

      const trx2 = await contract.buyfromToken(
        // buying from token
        1,
        "0x0000000000000000000000000000000000000000",
        parseUnits(amount.toString(), 18)
      );

      await trx2.wait();
    } else if (paymentType === "BUSD") {
      const usdc = await getContract(USDC_CONTRACT_ADDRESS, TOKEN_ABI, signer);
      const transaction = await usdc.approve(
        PRESALE_CONTRACT_ADDRESS,
        parseUnits(amount.toString(), 6)
      );
      await transaction.wait();

      const trx2 = await contract.buyfromToken(
        // buying from token
        2,
        "0x0000000000000000000000000000000000000000",
        parseUnits(amount.toString(), 18)
      );
      await trx2.wait();
    }
  };

  const getData = async () => {
    // console.log(address);
    const provider = getProvider();
    const signer = await getSigner(provider);
    const token = await getContract(TOKEN_CONTRACT_ADDRESS, TOKEN_ABI, signer);
    const balance = await token.balanceOf(address);
    const balanceInEth = formatUnits(balance, 18);
    // console.log(balanceInEth);
    // contract token balance
    const contractBalanceInEth = await token.balanceOf(
      PRESALE_CONTRACT_ADDRESS
    );
    const contractBalance = formatUnits(contractBalanceInEth, 18);
    return {
      balanceInEth,
      contractBalance,
    };
  };

  return { buy, getData };
}

export default useContract;
