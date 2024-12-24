const personalElement = document.querySelector("#personal");

const imgElement = document.createElement("img");
imgElement.src = "./images/profilephoto.jpg";
imgElement.style.width = "100%";
imgElement.alt = "Avatar";
personalElement.append(imgElement);

fetch("/database.json")
.then(res => res.json())
.then(data => {
    const divElement = document.createElement("div");
    divElement.className = "w3-display-bottomleft w3-container w3-text-black";
    const h2Element = document.createElement("h2");
    h2Element.textContent = `${data.personalInfo.firstName} ${data.personalInfo.lastName}`;
    divElement.append(h2Element);
    personalElement.append(divElement);
})
.catch((err) => console.error("Veri çekilirken hata oluştu:", err));

const personalInfoElement = document.querySelector("#personal-info");
const experienceElement = document.querySelector("#experiences");
const educationElement = document.querySelector("#education");
const footerElement = document.querySelector("#footer");

fetch("/database.json")
.then(res => res.json())
.then(data => {
    const p1Element = document.createElement("p");
    const i1Element = document.createElement("i");
    i1Element.className = "fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal";
    p1Element.append(i1Element);
    const textNode1 = document.createTextNode(data.personalInfo.title);
    p1Element.append(textNode1);
    personalInfoElement.append(p1Element);

    const p2Element = document.createElement("p");
    const i2Element = document.createElement("i");
    i2Element.className = "fa fa-home fa-fw w3-margin-right w3-large w3-text-teal";
    p2Element.append(i2Element);
    const textNode2 = document.createTextNode(data.personalInfo.address);
    p2Element.append(textNode2);
    personalInfoElement.append(p2Element);

    const p3Element = document.createElement("p");
    const i3Element = document.createElement("i");
    i3Element.className = "fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal";
    p3Element.append(i3Element);
    const textNode3 = document.createTextNode(data.personalInfo.email);
    p3Element.append(textNode3);
    personalInfoElement.append(p3Element);

    const p4Element = document.createElement("p");
    const i4Element = document.createElement("i");
    i4Element.className = "fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal";
    p4Element.append(i4Element);
    const textNode4 = document.createTextNode(data.personalInfo.phone);
    p4Element.append(textNode4);
    personalInfoElement.append(p4Element);

    const hrElement = document.createElement("hr");
    personalInfoElement.append(hrElement);

    const p5Element = document.createElement("p");
    p5Element.className = "w3-large";
    const bElement = document.createElement("b");
    const i5Element = document.createElement("i");
    i5Element.className = "fa fa-asterisk fa-fw w3-margin-right w3-text-teal";
    bElement.append(i5Element);
    const textNode5 = document.createTextNode("Skills");
    bElement.append(textNode5);
    p5Element.append(bElement);
    personalInfoElement.append(p5Element);

    data.skills.forEach(skill => {
        const skillElement = `
            <p>${skill.name}</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:${skill.level}%">${skill.level}%</div>
            </div>
        `;
        personalInfoElement.innerHTML += skillElement;
    })

    const brElement = document.createElement("br");
    personalInfoElement.append(brElement);

    const p6Element = document.createElement("p");
    p6Element.className = "w3-large w3-text-theme";
    const b2Element = document.createElement("b");
    const i6Element = document.createElement("i");
    i6Element.className = "fa fa-globe fa-fw w3-margin-right w3-text-teal";
    b2Element.append(i6Element);
    const textNode6 = document.createTextNode("Languages");
    b2Element.append(textNode6);
    p6Element.append(b2Element);
    personalInfoElement.append(p6Element);

    data.languages.forEach(lang => {
        const langElement = `
            <p>${lang.name}</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:${lang.level}%">${lang.level}%</div>
            </div>
        `;
        personalInfoElement.innerHTML += langElement;
    })

    const br2Element = document.createElement("br");
    personalInfoElement.append(br2Element);

    const h2Element = document.createElement("h2");
    h2Element.className = "w3-text-grey w3-padding-16";
    const i7Element = document.createElement("i");
    i7Element.className = "fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal";
    h2Element.append(i7Element);
    const textNode7 = document.createTextNode("Work Experience");
    h2Element.append(textNode7);
    experienceElement.append(h2Element);

    data.workExperience.forEach(exp => {
        const expElement = `
        <div class="w3-container">
          <h5 class="w3-opacity"><b>${exp.title} / ${exp.company}</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${exp.startDate} - ${exp.endDate}</h6>
          <p>${exp.description}</p>
          <hr>
        </div>
        `;
        experienceElement.innerHTML += expElement;
    })

    const h22Element = document.createElement("h2");
    h22Element.className = "w3-text-grey w3-padding-16";
    const i8Element = document.createElement("i");
    i8Element.className = "fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal";
    h22Element.append(i8Element);
    const textNode8 = document.createTextNode("Education");
    h22Element.append(textNode8);
    educationElement.append(h22Element);

    data.education.forEach(edu => {
        const eduElement = `
        <div class="w3-container">
          <h5 class="w3-opacity"><b>${edu.school}</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${edu.educationYears}</h6>
          <p>${edu.section}</p>
          <hr>
        </div>
        `;
        educationElement.innerHTML += eduElement;
    })

    const p7Element = document.createElement("p");
    const textNode9 = document.createTextNode("Find me on social media.");
    p7Element.append(textNode9);

    const p8Element = document.createElement("p");

    data.socialIcons.forEach(icon =>{
        const iElement = document.createElement("i");
        iElement.className = `fa ${icon} w3-hover-opacity`;
        p8Element.append(iElement);
    })

    const footerPElement = document.createElement("p");
    const footerTextNode = document.createTextNode("Powered by ");
    footerPElement.append(footerTextNode);

    const linkElement = document.createElement("a");
    linkElement.href = "https://www.w3schools.com/w3css/default.asp";
    linkElement.target = "_blank";
    linkElement.textContent = "w3.css";
    footerPElement.append(linkElement);

    footerElement.append(p7Element);
    footerElement.append(p8Element);
    footerElement.append(footerPElement);
})
.catch((err) => console.error("Veri çekilirken hata oluştu:", err));

