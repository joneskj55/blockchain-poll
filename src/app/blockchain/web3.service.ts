import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

const contractAbi = require("./contractABI.json");
declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private web3: Web3;
  private contract: Contract;
  private contractAddress = '0xC0590c686eC2ea806A09b4351F4A2d8a1cC44B13';

  constructor() {
    if (window.web3) {
      this.web3 = new Web3(window.ethereum);
      this.contract = new this.web3.eth.Contract(contractAbi, this.contractAddress);

      window.ethereum.enable().catch((err) => {
        console.log(err)
      })
    } else {
      console.log('MetaMask not found. Install or enable MetaMask.')
    }
   }
}
