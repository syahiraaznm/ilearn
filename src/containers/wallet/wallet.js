// import React, {useState} from 'react';
// import './wallet.scss';
// import { useHistory } from "react-router-dom";
// import ETH from "../../assets/image/wallet/coinETH.svg";
// import Deposit from "../../assets/image/wallet/depositIcon.svg";
// import Withdraw from "../../assets/image/wallet/withdrawIcon.svg";
// import Transaction from "../../assets/image/wallet/transactionIcon.svg";
// import Swap from "../../assets/image/wallet/swapIcon.svg";
// import Success from "../../assets/image/wallet/actionSuccess.svg";
// import Pending from "../../assets/image/wallet/actionPending.svg";
// import Failed from "../../assets/image/wallet/actionFailed.svg";
// import WalletDeposit from "../wallet/walletDeposit";
// import WalletWithdraw from "../wallet/walletWithdraw";
// import WalletSwap from "../wallet/walletSwap";

// export default function WalletTransaction() {
//     const tabs = 
//     [
//         {
//             img: Transaction,
//             header:'Transaction'
//         }, 
//         {
//             img: Deposit,
//             header: 'Deposit'
//         }, 
//         {   img: Withdraw,
//             header:'Withdraw'
//         }, 
//         {
//             img: Swap,
//             header: 'Swap'
//         }
//     ]

//     const [activeTab, setActiveTab] = useState(tabs[1]);

//     // const handleTab = (event, currentTab) => {
//     //     setActiveTab(currentTab);
//     //     console.log("activeTab:", activeTab)
//     // }

//     return (
//         <div className="walletContainer">
//             <div className="walletBoxTop">
//                 <div className="coinHeader">
//                     {/* <span className="walletHeaderText">BOCT VALUE</span> */}
//                     <img src={ETH} alt="coins"/>
//                     <span className="walletHeaderText">Ethereum</span>
//                 </div>
//                 <div className="walletBalance">0000.0000</div>
//                 <div className="price"> USD 000.00</div>
//             </div>
//             <div className="walletBoxBelow">
//                 <div className="action">
//                     {tabs.map((tab) => {
//                         return(
//                         <div 
//                         key={tab.header} 
//                         activeTab= {activeTab === tab.header} 
//                         onClick={()=> setActiveTab(tab.header)}
//                         >
//                             <div className="coinImage" style={{backgroundColor: "#3861FB"}}>
//                                 <img src={tab.img} width= "30px" alt="action"/>
//                             </div>
//                             <span className="actionText">{tab.header}</span>
//                         </div>
//                     )})}
//                     {/* <div onClick={()=> }>
//                         <div className="coinImage" style={{backgroundColor: "#3861FB"}}><img src={Transaction} width= "30px" alt="coins"/></div>
//                         <span className="actionText">Transaction</span>
//                     </div>
//                     <div onClick={()=> }>
//                         <div className="coinImage" style={{backgroundColor: "#15E094"}}><img src={Deposit} width= "30px" alt="coins"/></div>
//                         <span className="actionText">Deposit</span>
//                     </div>
//                     <div onClick={()=> }>
//                         <div className="coinImage" style={{backgroundColor: "#C544D6"}}><img src={Withdraw} width= "30px" alt="coins"/></div>
//                         <span className="actionText">Withdraw</span>
//                     </div>
//                     <div onClick={()=> }>
//                         <div className="coinImage" style={{backgroundColor: "#FFB012"}}><img src={Swap} width= "30px" alt="coins"/></div>
//                         <span className="actionText">Swap</span>
//                     </div> */}
//                 </div>
//             </div>
//             {activeTab === "Transaction" &&  (
//                 <>
//                 <div className="actionDisplayText"> TRANSACTION</div>
//                 <div className="transactionList">
//                     <div className= "d-flex flex-column" style={{borderRight: "1px solid #D7DCEF", width: "60%"}}>
//                         <div className="d-flex flex-row">
//                             <span>DD:MM:YY</span>
//                             <span>00:28:28</span>
//                         </div>
//                         <span>0987654367...</span>
//                     </div>
//                     <div className= "d-flex flex-row" style={{width: "40%", justifyContent: "flex-end"}}>
//                         <div className="d-flex flex-column align-items-center" id="listCol">
//                             <span>ACTION CALL</span>
//                             <span>0.023 BTC</span>
//                         </div>
//                         <div className="d-flex flex-column align-items-center" id="listCol">
//                             {/* {action=== "sucess" ? (
//                                 <img src={Success} alt="Success"/>
//                                 ): 
//                                 action === "pending"? (
//                                     <img src={Pending} alt="Pending"/>
//                                 ): (
//                                     <img src={Failed} alt="Failed"/>
//                                 )
//                             } */}
//                             <img src={Success} width="20px" alt="action type"/>
//                             {/* {transactionType === "deposit" ? (
//                                 <span>Deposit</span>
//                             ): transactionType=== "withdraw" ? (
//                                 <span>Withdraw</span>
//                             ): (
//                                 <span>Swap</span>
//                             )} */}
//                             <span>Deposit</span>
//                         </div>
//                     </div>
//                 </div>
//                 </>
//             )}
//             {activeTab === "Deposit" && (
//                 <WalletDeposit/>
//             )}
//             {activeTab === "Withdraw" && (
//                 <WalletWithdraw/>
//             )}
//             {activeTab === "Swap" && (
//                 <WalletSwap/>
//             )}
//         </div>
//     )
// }
 