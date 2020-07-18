async function getCovidApi() {
    const country = document.forms["myForm"]["country"].value;
    const data = await fetch('https://api.covid19api.com/summary');
    // console.log(data);
    const jsData = await data.json();
    // console.log(jsData.Countries);
    var choice = 0;
    for (var i = 0; i < jsData.Countries.length; i++) {
        if (jsData.Countries[i].Country.toLowerCase() == country.toLowerCase()) {
            choice = 1;
            document.getElementById("result").innerHTML = `The name of the country is `
                + `<strong>${jsData.Countries[i].Country}</strong>. The total confirmed cases `
                + `in the country are <strong>${jsData.Countries[i].TotalConfirmed}</strong> `
                + `and the total death cases are <strong>${jsData.Countries[i].TotalDeaths}</strong>.`
                + `<br>The last updated date was <strong>${jsData.Countries[i].Date.slice(0, 10)}</strong>`;
        }
    }
    if (choice == 0) {
        document.getElementById("result").innerHTML = "<strong>Please try some other country!!!!</strong>";
    }
}
function aboutPage() {
    document.getElementById("whole").innerHTML = `This page shows the current corona status of countries `
        + `that faced the horrible deaths and active cases due to Covid-19.`;
}
function theOrigin() {
    document.getElementById("whole").innerHTML = `The COVID‑19 pandemic, also known as the coronavirus pandemic, `
        + `is an ongoing global pandemic of coronavirus disease 2019 (COVID‑19), caused by Severe Acute Respiratory `
        + `Syndrome coronavirus 2 (SARS‑CoV‑2). The outbreak was first identified in Wuhan, China, in December 2019. `
        + `The World Health Organization declared the outbreak a Public Health Emergency of International Concern on `
        + `30 January 2020 and a pandemic on 11 March. As of 16 July 2020, more than 13.6 million cases of COVID‑19 `
        + `have been reported in more than 188 countries and territories, resulting in more than 586,000 deaths; more `
        + `than 7.62 million people have recovered.`;
}

function theFacts() {
    document.getElementById("whole").style.marginLeft = "70px";
    document.getElementById("whole").innerHTML = `<ul>FACTS
    <li>1.The term "new coronavirus" (novel or nCoV) means that before `
        + `neither scientists nor the cells met this virus before.</li>`
        +`<li>2.One in five people does not even have a cough. The disease`
        +` proceeds without any symptoms at all</li><li>3.If the virus was `
        +`already dangerous when it came into contact with humans, it means `
        +`that it can still walk somewhere within the animals and sooner `
        +`or later infect people again.</li><li>4.Antibiotics against `
        +`coronavirus are useless.</li><li>5.Sneezing is NOT a symptom of `
        +`coronavirus. Coughing - yes, sneezing - no.</li></ul>`;
}
function openNav() {
    document.getElementById("headers").style.marginLeft = "70px";
    document.getElementById("headers").style.transition = "margin-left .3s";
}
function closeNav() {
    document.getElementById("headers").style.marginLeft = "0px";
    document.getElementById("headers").style.transition = "margin-left .3s";
}
function openNavForSearch() {
    document.getElementById("search").style.marginLeft = "70px";
    document.getElementById("search").style.transition = "margin-left .3s";
}
function closeNavForSearch() {
    document.getElementById("search").style.marginLeft = "0px";
    document.getElementById("search").style.transition = "margin-left .3s";
}