function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xBZRF6diMF":
        Script1();
        break;
      case "6n9XTudvmVt":
        Script2();
        break;
      case "5mHSe1gRSpB":
        Script3();
        break;
      case "6TY0roC0Bbp":
        Script4();
        break;
      case "5sit44kWcfX":
        Script5();
        break;
      case "685NIcjt2Xv":
        Script6();
        break;
      case "5VHD0VvGhgP":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound.mp3";
audio.load();
audio.play();
audio.volume=0.5
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.1;
}

function Script4()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.2;
}

function Script5()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.3;
}

function Script6()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.4;
}

function Script7()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.5;
}

