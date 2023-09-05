"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[13639],{5470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>h});n(67294);var o=n(85893),a=n(11151);const s={title:"Staking Technical Overview",sidebar_label:"Staking Technical Overview",description:"Technical Overview of the Flow Staking Auction Phase"},r=void 0,i={unversionedId:"building-on-flow/run-and-secure/staking/technical-overview",id:"building-on-flow/run-and-secure/staking/technical-overview",title:"Staking Technical Overview",description:"Technical Overview of the Flow Staking Auction Phase",source:"@site/docs/building-on-flow/run-and-secure/staking/06-technical-overview.mdx",sourceDirName:"building-on-flow/run-and-secure/staking",slug:"/building-on-flow/run-and-secure/staking/technical-overview",permalink:"/docs/next/building-on-flow/run-and-secure/staking/technical-overview",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/building-on-flow/run-and-secure/staking/06-technical-overview.mdx",tags:[],version:"current",lastUpdatedBy:"Gregor G",lastUpdatedAt:1693945828,formattedLastUpdatedAt:"Sep 5, 2023",sidebarPosition:6,frontMatter:{title:"Staking Technical Overview",sidebar_label:"Staking Technical Overview",description:"Technical Overview of the Flow Staking Auction Phase"},sidebar:"buildingOnFlow",previous:{title:"Query Epoch Info with Scripts or Events",permalink:"/docs/next/building-on-flow/run-and-secure/staking/epoch-scripts-events"},next:{title:"Query Staking Info with Scripts or Events",permalink:"/docs/next/building-on-flow/run-and-secure/staking/staking-scripts-events"}},d={},h=[{value:"Smart Contract Summary",id:"smart-contract-summary",level:2},{value:"Staking as a Node Operator",id:"staking-as-a-node-operator",level:2},{value:"Staking as a Delegator",id:"staking-as-a-delegator",level:2},{value:"Staking Operations Available to All Stakers",id:"staking-operations-available-to-all-stakers",level:2},{value:"Stake More Tokens",id:"stake-more-tokens",level:3},{value:"Cancel Committed Stake / Unstake Tokens",id:"cancel-committed-stake--unstake-tokens",level:3},{value:"Cancel an Unstake Request",id:"cancel-an-unstake-request",level:3},{value:"Withdraw Unstaked Tokens",id:"withdraw-unstaked-tokens",level:3},{value:"Withdraw Rewarded Tokens",id:"withdraw-rewarded-tokens",level:3},{value:"Token Pools",id:"token-pools",level:2}];function l(e){const t=Object.assign({p:"p",h1:"h1",a:"a",code:"code",h2:"h2",ol:"ol",li:"li",strong:"strong",ul:"ul",h3:"h3"},(0,a.ah)(),e.components),{Callout:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:"If you haven't read the Introduction, please read that first. That document\nprovides a non-technical overview of staking on Flow for all users and is a\nnecessary prerequisite to this document."})}),"\n",(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:"This document assumes you have some technical knowledge about the Flow\nblockchain and programming environment."})}),"\n",(0,o.jsx)(t.h1,{id:"staking",children:"Staking"}),"\n",(0,o.jsxs)(t.p,{children:["This document describes the functionality of the\n",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowIDTableStaking.cdc",children:"core identity table and staking smart contract"}),".\nIt gives an overview of the process of epochs, staking as a node, and delegation. It is an important prerequisite\nto understand before proceeding with any other technical integration or interaction with the Flow Protocol,\nbut does not provide step-by-step instructions for how to perform specific actions. See the\n",(0,o.jsx)(t.a,{href:"./staking-collection/",children:"Staking Collection Docs for instructions"})]}),"\n",(0,o.jsx)(t.p,{children:"This document also describes how to read public staking data from the contract.\nAnyone can read public data from the staking smart contract with these instructions."}),"\n",(0,o.jsxs)(t.p,{children:["The transactions described in this document are contained in the\n",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/tree/master/transactions/idTableStaking",children:(0,o.jsx)(t.code,{children:"flow-core-contracts/transactions/idTableStaking/"})}),"\ndirectory. You can see the text of all the transactions used to interact with the smart contract there."]}),"\n",(0,o.jsx)(t.h2,{id:"smart-contract-summary",children:"Smart Contract Summary"}),"\n",(0,o.jsx)(t.p,{children:"The Flow staking smart contract manages a record of stakers who have staked tokens for the network.\nUsers who want to stake can register with the staking contract at any time during the staking auction,\nand their tokens will be locked for staking until they request to unstake them."}),"\n",(0,o.jsxs)(t.p,{children:["You should already understand from reading the ",(0,o.jsx)(t.a,{href:"./epoch-preparation",children:"epoch documentation"}),"\nthat an epoch lasts roughly a week. The ",(0,o.jsx)(t.code,{children:"FlowIDTableStaking"})," contract focuses on the identity table\nand staking part of the epoch schedule."]}),"\n",(0,o.jsxs)(t.p,{children:["Epoch Schedule from the perspective of the ",(0,o.jsx)(t.code,{children:"FlowIDTableStaking"})," contract:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Start of Epoch:"})," Generic metadata about the current epoch is updated and shared\nand the staking auction is enabled."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Staking Auction:"})," Stakers can perform any action they want to manage their stake, like\ninitially registering, staking new tokens, unstaking tokens, or withdrawing rewards.\nThis phase takes up the vast majority of time in the epoch."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"End Staking Auction:"})," Stakers cannot perform any more staking actions\nuntil the start of the next epoch/staking auction."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Remove Insufficiently Staked Nodes:"})," All node operators who don't meet the minimum\nor are not operating their node properly will be removed."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Randomly Assign Nodes to New Slots:"})," Each node type has a configurable\nnumber of nodes that can operate during any given epoch.\nThe contract will randomly select nodes from the list of newly staked and approved nodes\nto add them to the ID table. Once all the slots have been filled, the remaining nodes are refunded\nand can apply again for the next epoch."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Rewards Calculation:"})," Calculate rewards for all the node operators staked in the current epoch."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Move tokens between pools."})," (See the token pools section for the order of movements)"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Rewards Payout:"})," Pay rewards to all the node operators staked\nfrom the previous epoch using the calculation from earlier in the epoch."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"End Epoch:"})," Set the reward payout for the upcoming epoch and go to the top of this list."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"FlowIDTableStaking"})," contract manages the identity table, and all of these phases.\nInitially, control of these phases is controlled by the ",(0,o.jsx)(t.code,{children:"FlowIDTableStaking.Admin"})," resource\nobject stored in the Flow Epoch account storage.\nControl will eventually be completely decentralized and managed by the node software, smart contracts,\nand democratically by all the stakers in the network."]}),"\n",(0,o.jsx)(t.h2,{id:"staking-as-a-node-operator",children:"Staking as a Node Operator"}),"\n",(0,o.jsx)(t.p,{children:"For a node to stake, node operators first need to generate their staking key,\nstaking key proof-of-possesion, networking address, and networking key."}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/nodes/node-operation/",children:"node operation guide"}),"\ndescribes how to run a node and generate node information."]}),"\n",(0,o.jsx)(t.p,{children:"To generate a node ID, simply hash the staking key."}),"\n",(0,o.jsx)(t.p,{children:"Node operators need to determine the role of node they will be running\n(Collection, Consensus, Execution, Verification, or Access)."}),"\n",(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:"NOTE: Access Nodes are eligible to stake but will not receive rewards for\ntheir stake. Please register as a different node type if you would like to\nreceive rewards."})}),"\n",(0,o.jsx)(t.p,{children:"Once the info has been determined:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Node role: ",(0,o.jsx)(t.code,{children:"UInt8"})," (1 = Collection, 2 = Consensus, 3 = Execution, 4 = Verification, 5 = Access)"]}),"\n",(0,o.jsxs)(t.li,{children:["Node ID: 32 byte ",(0,o.jsx)(t.code,{children:"String"})," (64 hex characters)"]}),"\n",(0,o.jsxs)(t.li,{children:["Networking Address: ",(0,o.jsx)(t.code,{children:"String"})," (Length must be less than 510 characters and be a properly formatted IP address or hostname)"]}),"\n",(0,o.jsxs)(t.li,{children:["Networking Key: 64 byte ",(0,o.jsx)(t.code,{children:"String"})," (128 hex characters, must be a valid ECDSA-P256 Key)"]}),"\n",(0,o.jsxs)(t.li,{children:["Staking Key: 96 byte ",(0,o.jsx)(t.code,{children:"String"})," (192 hex characters, must be a valid BLS key)"]}),"\n",(0,o.jsx)(t.li,{children:"Staking Key Proof of Possesion: (48 byte (96 hex characters) string)"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The node operator is ready to register their node."}),"\n",(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:"NOTE: The staking smart contract validates that the strings for the keys are\nvalid public keys. The staking admin and node software also checks the keys\nand networking address to make sure they are valid and if they are not, the\nregistered node will not be eligible to stake."})}),"\n",(0,o.jsxs)(t.p,{children:["To register a node, the node operator calls the\n",(0,o.jsxs)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowIDTableStaking.cdc#L870",children:[(0,o.jsx)(t.code,{children:"addNodeRecord"})," function"]}),"\non the staking contract, providing all the node info and the tokens that they want to immediately stake, if any."]}),"\n",(0,o.jsx)(t.p,{children:"This registers the node in the Flow node identity table\nand commits the specified tokens to stake during the next epoch.\nThis also returns a special node operator object that is stored in the node operator's account.\nThis object is used for staking, unstaking, and withdrawing rewards."}),"\n",(0,o.jsxs)(t.p,{children:["Consensus and Collection nodes also need to create a separate machine account\nfor use in the DKG and QC proccesses, respectively. This machine account creation\nis handled automatically by the staking collection smart contract.\nMore information is in the ",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/run-and-secure/staking/machine-account#creation",children:"machine account documentation"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Every node operator will run the same transaction to register their node at any time throughout the staking auction."}),"\n",(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:"The register node transaction only needs to be submitted once per node. A node\ndoes not need to register every epoch. A registration cannot be used to manage\nmultiple nodes. Multiple nodes need to be registered separately (with the\nStaking Collection)."})}),"\n",(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:"Once a node operator has registered their node and its metadata, the metadata\ncannot be modified. The only exception is the networking address, which can me\nmodified with the Update Networking Address transaction. If a node operator\nwants to update any of their other metadata such as ID, keys, or role, they\nneed to unstake, withdraw their tokens, and register a completely new node."})}),"\n",(0,o.jsx)(t.p,{children:"Once node operators have registered and have the special node object, they will be able\nto perform any of the valid staking options with it, assuming that they have\nthe required amount of tokens to perform each operation."}),"\n",(0,o.jsxs)(t.p,{children:["When the staking auction ends, if a node operator has committed less than the minimum stake required,\n",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowIDTableStaking.cdc#L788",children:"or if their node information is invalid and they haven't been approved by the network,"}),"\ntheir committed tokens are moved to their unstaked pool, which they can withdraw from at any time."]}),"\n",(0,o.jsxs)(t.p,{children:["Nodes who did have enough tokens committed and are approved will have their\n",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowIDTableStaking.cdc#L923-L927",children:"committed tokens moved to the staked state"}),"\nat the end of the epoch if they are selected as a node operator\nby the random node slot filling algorithm.\nThere is a configurable cap on the number of nodes of each type."]}),"\n",(0,o.jsxs)(t.p,{children:["If a node operator has users delegating to them, they cannot withdraw their own tokens\nsuch that their own staked tokens would fall below the minimum requirement for that node type.\nIf they have delegators and try to submit ",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowIDTableStaking.cdc#L510-L514",children:"an unstaking transaction"}),"\nthat would put their stake below the minimum, it will fail."]}),"\n",(0,o.jsxs)(t.p,{children:["If they want to unstake below the minimum, they must unstake all of their tokens using the special\n",(0,o.jsxs)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowIDTableStaking.cdc#L538",children:[(0,o.jsx)(t.code,{children:"unstakeAll"})," method,"]}),"\nwhich also unstakes all of the tokens that have been delegated to them."]}),"\n",(0,o.jsxs)(t.p,{children:["Consequently, a node operator cannot accept delegation unless ",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowIDTableStaking.cdc#L1066",children:"their own stake is above the minimum."})]}),"\n",(0,o.jsx)(t.h2,{id:"staking-as-a-delegator",children:"Staking as a Delegator"}),"\n",(0,o.jsx)(t.p,{children:"Every staked node in the Flow network is eligible for delegation by any other user.\nThe user only needs to know the node ID of the node they want to delegate to."}),"\n",(0,o.jsxs)(t.p,{children:["To register as a delegator, the delegator submits a ",(0,o.jsx)(t.strong,{children:"Register Delegator"}),"\ntransaction that calls the ",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowIDTableStaking.cdc#L1053",children:(0,o.jsx)(t.code,{children:"registerNewDelegator function"})}),",\nproviding the ID of the node operator they want to delegate to.\nThis transaction should store the ",(0,o.jsx)(t.code,{children:"NodeDelegator"})," object\nin the user's account, which is what they use to perform staking operations."]}),"\n",(0,o.jsxs)(t.p,{children:["Users are able to get a list of possible node IDs to delegate to via on-chain scripts.\nThis information will also be provided off-chain, directly from the node operators or via\nthird-party services. ",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow/blob/master/nodeoperators/NodeOperatorList.md",children:"Available node IDs are listed in a public repo."})]}),"\n",(0,o.jsx)(t.p,{children:"The fee that node operators take from the rewards their delegators receive is 8%.\nA node operator cannot be delegated to unless the total tokens they have committed to stake\nare above the minimum requirement for their node types."}),"\n",(0,o.jsxs)(t.p,{children:["The delegation logic keeps track of the amount of tokens each delegator has delegated for the node operator.\nWhen rewards are paid, the protocol ",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowIDTableStaking.cdc#L888-L898",children:"automatically takes the 8% cut"}),"\nof the delegator's rewards for the node operator\nand the delegator's rewards are deposited in the delegator's reward pool."]}),"\n",(0,o.jsx)(t.h2,{id:"staking-operations-available-to-all-stakers",children:"Staking Operations Available to All Stakers"}),"\n",(0,o.jsxs)(t.p,{children:["Regardless of whether they are a node operator or delegator, a staker has access\nto all the same staking operations, outlined below.\nSpecific implementations of these transactions are detailed in the ",(0,o.jsx)(t.a,{href:"./staking-collection/",children:"Staking Collection Docs"})]}),"\n",(0,o.jsx)(t.h3,{id:"stake-more-tokens",children:"Stake More Tokens"}),"\n",(0,o.jsx)(t.p,{children:"A staker can commit more tokens to stake for the next epoch at any time during the staking auction,\nand there are three different ways to do it."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["They can commit new tokens to stake by submitting a ",(0,o.jsx)(t.strong,{children:"stake_new_tokens"})," transaction,\nwhich withdraws tokens from their account's flow token vault and commits them."]}),"\n",(0,o.jsxs)(t.li,{children:["They can commit tokens that are in their unstaked token pool, which holds the tokens\nthat they have unstaked. Submit a ",(0,o.jsx)(t.strong,{children:"stake_unstaked_tokens"}),"\ntransaction to move the tokens from the unstaked pool to the committed pool."]}),"\n",(0,o.jsxs)(t.li,{children:["They can commit tokens that are in their rewarded token pool, which holds the tokens\nthey have been awarded. They submit a ",(0,o.jsx)(t.strong,{children:"stake_rewarded_tokens"}),"\ntransaction to move the tokens from the rewards pool to the committed pool."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"cancel-committed-stake--unstake-tokens",children:"Cancel Committed Stake / Unstake Tokens"}),"\n",(0,o.jsxs)(t.p,{children:["At any time during the staking auction, a staker can submit a request to unstake tokens with a ",(0,o.jsx)(t.strong,{children:"request_unstaking"})," transaction.\nIf there are tokens that have been committed but are not staked yet,\nthey are moved to the unstaked pool and are available to withdraw."]}),"\n",(0,o.jsx)(t.p,{children:"If the requested tokens are in the staked pool,\nit marks the specified amount of tokens to be unstaked at the end of the epoch.\nAt the end of the epoch, the tokens are moved to the unstaking pool.\nThey will sit in this pool for one (1) additional epoch,\nat which point they will be moved to the unstaked tokens pool."}),"\n",(0,o.jsx)(t.h3,{id:"cancel-an-unstake-request",children:"Cancel an Unstake Request"}),"\n",(0,o.jsxs)(t.p,{children:["Unstaking requests are not fulfilled until the end of the epoch where they are submitted,\nso a staker can cancel the unstaking request before it is carried out.\nA staker can do this by submitting a ",(0,o.jsx)(t.strong,{children:"stake_unstaked_tokens"})," transaction, specifying\nthe number of tokens of their unstake request they would like to cancel.\nIf the specified number of tokens have been requested to unstake, the request will be canceled."]}),"\n",(0,o.jsx)(t.h3,{id:"withdraw-unstaked-tokens",children:"Withdraw Unstaked Tokens"}),"\n",(0,o.jsxs)(t.p,{children:["At any time, stakers are able to freely withdraw from their unstaked tokens pool\nwith the ",(0,o.jsx)(t.strong,{children:"withdraw_unstaked"})," transaction."]}),"\n",(0,o.jsx)(t.h3,{id:"withdraw-rewarded-tokens",children:"Withdraw Rewarded Tokens"}),"\n",(0,o.jsxs)(t.p,{children:["Staking rewards are paid out at the end of every epoch based on how many tokens\nare in a users ",(0,o.jsx)(t.code,{children:"tokensStaked"})," pool. Every staker's rewards\nare deposited into their rewarded tokens pool. Rewards can be withdrawn\nat any time by submitting a ",(0,o.jsx)(t.strong,{children:"withdraw_reward_tokens"})," transaction."]}),"\n",(0,o.jsx)(t.p,{children:"These tokens are unlocked and can be transferred on-chain if desired, or re-staked."}),"\n",(0,o.jsxs)(t.p,{children:["The source code for the staking contract and more transactions\ncan be found in the ",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts",children:"Flow Core Contracts GitHub Repository"}),"."]}),"\n",(0,o.jsx)(t.h1,{id:"monitor-events-from-the-identity-table-and-staking-contract",children:"Monitor Events from the Identity Table and Staking Contract"}),"\n",(0,o.jsx)(t.p,{children:"See the staking events document for information about the events that can be emitted by the staking contract."}),"\n",(0,o.jsx)(t.h1,{id:"appendix",children:"Appendix"}),"\n",(0,o.jsx)(t.h2,{id:"token-pools",children:"Token Pools"}),"\n",(0,o.jsx)(t.p,{children:"Each node operator has five token pools allocated to them:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Committed Tokens:"})," Tokens that are committed for the next epoch.\nThey are automatically moved to the staked pool when the next epoch starts."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Staked Tokens:"})," Tokens that are staked by the node operator for the current epoch.\nThey are only moved at the end of an epoch and if the staker\nhas submitted an unstaking request."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Unstaking Tokens:"})," Tokens that have been unstaked,\nbut are not free to withdraw until the following epoch."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Unstaked Tokens:"})," Tokens that are freely available to withdraw or re-stake.\nUnstaked tokens go to this pool."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Rewarded Tokens:"})," Tokens that are freely available to withdraw or re-stake.\nRewards are paid and deposited to the rewarded Pool after each epoch."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"At the end of every epoch, tokens are moved between pools in this order:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"All committed tokens will get moved either to the staked tokens pool,\nor to the unstaked tokens pool (depending on if the registered node has met the minimum stake requirements)."}),"\n",(0,o.jsx)(t.li,{children:"All committed tokens get moved to staked tokens pool."}),"\n",(0,o.jsx)(t.li,{children:"All unstaking tokens get moved to the unstaked tokens pool."}),"\n",(0,o.jsx)(t.li,{children:"All requested unstaking tokens get moved from the staked pool to the unstaking pool."}),"\n"]})]})}const c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}}}]);