function copyBot() {
  //Spreadsheetオブジェクトを取得
  var sheet = SpreadsheetApp.getActiveSheet();
  
  //貼り付ける間隔diffNumを定義。デフォルトは1行おきなので2とする。
  var diffNum = sheet.getRange("B6").getValue();
  
  //何回コピペするか
  var endNum = sheet.getRange("B6").getValue();
  
  //コピー元を取得
  var copyFrom = sheet.getRange("B9").getValue();

  //コピペする前に値が入っていた場合、消去
  
  
  for(var i = 3; i < endNum ; i+=diffNum){
    Logger.log("現在の行は%s行目で、入力された値は%sです。",i,copyFrom);
    var copyTo = sheet.getRange(i, 3).setValue(copyFrom);
    
  }
}


/*
基本設計
N行ごとにセルの値をコピーして貼り付けていくBot
1. コピーする値が格納されたセルを取得
2. 

*/
