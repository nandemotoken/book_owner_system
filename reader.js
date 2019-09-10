//環境設定
var Address = "0xc23942385810e6da40fd35e091a7a1fbf88f7567";

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

//function r_function1( r_result1 ){ console.log(r_result1); }
//mycontract.methods.get_owner_lists().call().then(r_function1);


//function r_function1( r_result1 ){ console.log(r_result1); }

//function checkmyaddress( hiki ){
// console.log(hiki[0]);

//mycontract.methods.get_owner_lists().call().then(r_function1);

//}

//web3js.eth.getAccounts().then(checkmyaddress);

//OK
//web3js.eth.getAccounts()
//.then( function(hiki1){ return hiki1[0]; })
//.then( function(hiki2){ console.log(hiki2); });



web3js.eth.getAccounts()
.then( function(hiki1){ return hiki1[0]; })
.then( function(hiki2){ 
	mycontract.methods.get_owner_lists().call().then( function( nakahiki ){
	//console.log( hiki2 );
	//console.log( nakahiki[0] );
	//console.log( hiki2 == nakahiki[0] );
	for ( let i = 0; i < nakahiki.length; i++){
		//console.log( hiki2 == nakahiki[i]  );
		if( hiki2 == nakahiki[i] ){
			console.log("you are book owner");
		}
	}
	} );
	//console.log(hiki2);
	 });




