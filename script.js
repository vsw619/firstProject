function total()
{
    var x = document.getElementById("wordcount").value;
    var wordTotal = 0;
    var totalSpaces = 0;
    var totalSentences = 0;
    var avgWords = 0;
    for (var i = 0; i < x.length; i++)
    {
        if (x[i] == " ")
        {
            wordTotal++;
            totalSpaces++;
        }

        if (x[i] == "." || x[i] == "?" || x[i] == "!")
        {
            totalSentences++;
        }
    }

    wordTotal++;
    avgWords = wordTotal / totalSentences;
    document.getElementById("words").innerHTML = "Total words = " + wordTotal;
    document.getElementById("space").innerHTML = "Total spaces = " + totalSpaces;
    document.getElementById("sent").innerHTML = "Total sentences = " + totalSentences;
    document.getElementById("avgwords").innerHTML = "Total average words per sentence = " + avgWords;

}
