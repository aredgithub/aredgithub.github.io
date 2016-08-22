var currentScene = 0;
var changeScene = function(decision) {

    if (currentScene == 0) {
        currentScene = 1;
    } else if (currentScene == 1) {
        currentScene = decision == 1 ? 2 : 3; /*使用者是選1嗎，如果是就到2，不是就到3*/
    } else if (currentScene == 2) {
        currentScene = decision == 1 ? 4 : 5; /*使用者是選1嗎，如果是就到4，不是就到5*/
    } else if (currentScene == 3) {
        currentScene = decision == 1 ? 6 : 7; /*使用者是選1嗎，如果是就到6，不是就到7*/
    } else if (currentScene == 4) {
        currentScene = decision == 1 ? 8 : 5; /*使用者是選1嗎，如果是就到8，不是就到5*/
    } else if (currentScene == 7) {
        currentScene = decision == 1 ? 9 : 6; /*使用者是選1嗎，如果是就到8，不是就到6*/
    }
    document.getElementById("sceneimg").src = "scene" + currentScene + ".png";
    /*指令大小寫一定要對才會動*/
}
