//環境設定
var Address = "0x75649CCbd873A3220D55d52f57b16C53E3cb4568";

//metamaskの準備
web3js = new Web3(web3.currentProvider);	
//スマートコントラクト読み込み
mycontract = new web3js.eth.Contract(ABI , Address);

//1.00-beta.36と表示されるのが正しい
console.log( Web3.version );

//metamask login処理
ethereum.enable().then(console.log);



//---------------------read--------------------------
//コントラクトのread処理は次の書式に統一します。
//定義
//function r_functionN( r_resultN ){ javascriptの処理内容...console.log(read_resultN)など }
//
//利用
//mycontract.methods.getnumber().call().then(r_functionN);
//...solidityの関数呼出の結果が、r_functionNで処理される。
//---------------------------------------------------


web3js.eth.getAccounts()
.then( function(hiki1){ return hiki1[0]; })
.then( function(hiki2){ 
	mycontract.methods.get_owner_lists().call().then( function( nakahiki ){
	for ( let i = 0; i < nakahiki.length; i++){
		if( hiki2 == nakahiki[i] ){
			console.log("you are book owner");
		}
	}
	} );
	 });




