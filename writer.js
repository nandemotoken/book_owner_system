//環境設定
var Address = "0x45f84bA4eBB2758E2321d9c5d37D16B45A0C7bd2";

//metamaskの準備
web3js = new Web3(web3.currentProvider);	
//スマートコントラクト読み込み
mycontract = new web3js.eth.Contract(ABI , Address);

//1.00-beta.36と表示されるのが正しい
console.log( Web3.version );

ethereum.enable().then(console.log);

//---------------------write-------------------------
//コントラクトのwrite処理は次の書式に統一します。
//定義
//function w_functionN( hidari , migi ){ mycontract.methods.setnumber(setnum).send({from: migi[0] });}
//
//利用
//web3js.eth.getAccounts( w_functionN );
//...metamaskの準備が出来たらw_functionNを実行する
//--------------------------------------------------


var id;
var co;

function ownerRegister( hidari , migi ){ mycontract.methods.owner_register( id , co ).send({from: migi[0]}); }


function regist( i  , c  ){
	id = i;
	co = c;
	web3js.eth.getAccounts( ownerRegister );
}



