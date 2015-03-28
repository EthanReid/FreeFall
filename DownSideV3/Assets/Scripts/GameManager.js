#pragma strict

var scoreText : UnityEngine.UI.Text;
var score : int;


function Start () {

}

function Update () {
	score = playerManage.score;
	scoreText.text = score.ToString();
}