function copyBot() {
  //Spreadsheetオブジェクトを取得
  var sheet = SpreadsheetApp.getActiveSheet();
  
  //コピペする前にC列を初期化
  var lastRowToCopy = sheet.getLastRow();
  sheet.getRange(3, 3, lastRowToCopy).clear();
  
  //貼り付ける間隔を決める。
  var diffNum = sheet.getRange("B6").getValue();
  Logger.log("貼り付ける間隔は%sです。",diffNum);
  //何回コピペするか
  var endNum = sheet.getRange("B9").getValue() +3;
  Logger.log("コピペ回数は%sです。",endNum);
  //コピー元を取得
  var copyFrom = sheet.getRange("B3").getValue();
  Logger.log("コピー元データは「%s」",copyFrom);

  
  //値を指定した間隔で繰り返しSet
  for(var i = 3; i < diffNum * endNum ; i+=diffNum){
    Logger.log("%nコピペ%s回目%n現在の行は%s行目で %n入力された値は「%s」です。",i-2,i,copyFrom);
    var copyTo = sheet.getRange(i, 3).setValue(copyFrom);
    
  }
}

