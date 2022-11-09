var imgaeraray = ["feto.jpg", "feto2.jpg", "gremis.webp", "maria lus.jpg", "infart.webp", "los wiwis.png"];
var pessoaarrau = ["feto", "joselino cruzes", "paizão de familia", "maria lus", "vô denovo", "AI QUE BONITINHO EU QUERO MEUDEUS DO CEU ABIIBGIDISDIIDIDIBIIDIDIBDIBIIBDI HHJGAM,MMMMMAAAAAAAAA AIIIIIIIIIIAAVBHDBMN VMB MNM,M MM  MM "];
var i=0;
function update() {
    i++;
    var numbersOfFamilyMemberInArray = 6
    if(i > numbersOfFamilyMemberInArray)
    {
        i = 0;
    }
    var updatedImage = imgaeraray[i];
    var updatedName = pessoaarrau[i];
    document.getElementById("vovo").src = updatedImage;
    document.getElementById("ovov").innerHTML = updatedName;
}