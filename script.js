//Banner code
var timer;
function Start_Timer(){
    timer = setInterval(banner, 5000);
}
function reset_timer(){
    clearInterval(timer);
    Start_Timer();
}

function banner(){
    var Checked = false;
    for (var i = 1; i <= 5; i++) {
        var checkbox = document.getElementById('radio' + i);
        if (checkbox.checked && Checked == false){
            var num = i + 1;
            if (num == 6){
                num = 1;
        }
            document.getElementById('radio'+num).checked = true;
            Checked = true;
        }
    }
    if (Checked == false){
        document.getElementById('radio1').checked = true;
    }
}

function Slide(num){
    var Checked = false;
    for (var i = 1; i <= 5; i++) {
        var checkbox = document.getElementById('radio' + i);
        if (checkbox.checked && Checked == false){
            var num = i + num;
            if (num == 6){
                num = 1;
            }
            if (num == 0){
                num = 5;
            }
            document.getElementById('radio' + num).checked = true;
            Checked = true;
        }
    }
    reset_timer();
}


//Search Code

function search(event){
    event.preventDefault();
        
    // Declare and Initialize every variable.
    var input = document.getElementById("searchbar").value;
    input = input.toUpperCase(); // Makes input capital.
    input = input.replace(/ /g, ""); // Remove input spaces.
    var result = "not_found";
    var NumOfResults = 0;
    
    // Var with more than 1 value are called arrays.
    var cond = [
        "MEASUREMENT", "MOTION", "SPEED",
        "HEATANDTEMPERATURE", "TYPESOFTEMPERATURE", 
        "LIGHT", "MIRROR", "TYPES OF MIRRORS",
        "ELECTRICITY", "CONDUCTORSANDINSULATORS",

        "RESPIRATION", "STEPSINRESPIRATION", 
        "REPIRATIONINHUMANSBEINGS", "TYPESOFRESPIRATION",
        "RESPIRATIONINOTHERANIMALSANDPLANTS",
        "PLANTS", "PHOTOSYNTHESIS", "HETEROTROPHICMODEOFNUTRITIONINPLANTS",
        "DIGESTIVESYSTEM", "CIRCULATORYSYSTEM",
        "EXCRETORYSYSTEM", "NERVOUSSYSTEM",

        "MATTER", "STATESOFMATTER", "CHANGES", 
        "CHEMICALREACTION", "SEPARATIONOFSUBSTANCES",

        "CLIMATECHANGE", "CAUSESOFCLIMATECHANGE", "EFFECTSOFCLIMATECHANGE",
        "SOLUTIONOFCLIMATECHANGE"
    ];
    var link = [
        "Physics.html#Measurement", "Physics.html#Motion", "Physics.html#Speed",
        "Physics.html#Heat_and_Temperature", "Physics.html#Types_of_Temperature", 
        "Physics.html#Light", "Physics.html#Mirror", "Physics.html#Types_of_Mirror",
        "Physics.html#Electricity", "Physics.html#Conductors_and_Insulators",

        "Biology.html#Respiration", "Biology.html#Steps_in_Respiration",
        "Biology.html#Respiration_in_Humans", "Biology.html#Types_of_Respiration",
        "Biology.html#Respiration_in_Other_Animals_and_Plants",
        "Biology.html#Plants", "Biology.html#Photosynthesis", "Biology.html#Heterotrophic",
        "Biology.html#Digestive", "Biology.html#Circulatory",
        "Biology.html#Excretory", "Biology.html#Nervous",

        "Chemistry.html#Matter", "Chemistry.html#States_of_Matter", "Chemistry.html#Changes", 
        "Chemistry.html#Chemical_Reaction", "Chemistry.html#Separation",

        "Environment.html#Climate_Change", "Environment.html#Causes", "Environment.html#Effects",
        "Environment.html#Solutions"
    ];
    var names = [
        "Measurement", "Motion", "Speed",
        "Heat and Temperature", "Types of Temperature", 
        "Light", "Mirror", "Types of Mirrors",
        "Electricity", "Conductors and Insulators",

        "Respiration", "Steps in Respiration", 
        "Repiration in Humans Beings", "Types of Respiration",
        "Respiration in Other Animals and Plants",
        "Plants", "Photosynthesis", "Heterotrophic Mode of Nutrition in Plants",
        "Digestive System", "Circulatory System",
        "Excretory System", "Nervous System",

        "Matter", "States of Matter", "Changes", 
        "Chemical Reaction", "Separation of Substances",

        "Climate Change", "Causes of Climate Change", "Effects of Climate Change",
        "Solution of Climate Change"
    ];
    
    if (input != ""){
        var WhichNum
        for(i=0; i<=cond.length-1; i++){
            if(cond[i].includes(input)){
            result = "found";
            NumOfResults++;
            WhichNum = i;
            }
        }

        event.preventDefault();  // Prevent Refresh after any message.
        if(NumOfResults == 1){
            // Redirect to another page if confirm == true.
            // \" are " in javascript.
            if(confirm("Are you sure to go to \""+names[WhichNum]+"\" section?")){
                window.location.href = link[WhichNum];
            }
        }
        
        else if(result == "not_found"){
            alert("No Result Found");
        }
        
        else{
            var Result = document.getElementById("Result");
            var NewElement;
            Result.innerHTML = "";
            var description = [
                "In our daily life, we come across many situations in which the measurement is required. Fruits and vegetables are weighed, body measurement is needed for stitching clothes, body temperature is measured to check fever and length of a cloth is measured while buying. Measurement is defined as the comparison of a unknown quantity with a known quantity of the same kind. In our daily....",
                "The movement of an object is called motion. For example, all the human beings and animals can move from one place to another without any external help. All the plants cannot move. There are some plants that they can move their body parts such as leaves, branches and flowers. Non-living things such as bike, car, bus and train cannot move on their own. They require an external....",
                "Consider a boy walking to school-he requires 10 minutes to cover a distance of 500 m. Another boy reaches school by bus he also requires 10 minutes, but the distance travelled in this case is 4 km. Although the time taken by both the boys to reach school is the same, the distance travelled is different. The boy reaching the school by foot is moving slow as compared to the boy....",
                "Heat: Heat is the transfer of thermal energy from one physical system to another system or from one region in a physical system to another region. Eg: The Sun, electrical appliances, burning wood, eating food,friction etc.... || Temperature: Temperature describes the average kinetic energy of molecules within a material or system and is measured in Celsius (°C), Fahrenheit (°F)....",
                "Celsius: Celsius, also called centigrade, scale based on 0° for the freezing point of water and 100° for the boiling point of water. Invented in 1742 by the Swedish astronomer Anders Celsius, it is sometimes called the centigrade scale because of the 100-degree interval between the defined points. || Fahrenheit: Fahrenheit temperature scale, scale based on 32° for the freezing....",
                "Light is a type of electromagnetic radiation that allows the human eye to see or makes objects visible. It is also defined as visible radiation to the human eye. Photons, which are tiny packets of energy, are found in light. Light always moves in a straight line. || Properties of an Light || Light travels in a straight line. The speed of light is faster than sound. Light travels....",
                "A mirror is defined as a reflecting surface and can be explained by the law of reflection, which states that when a ray of light is made to fall on the reflecting surface, the incident ray, the reflected ray and the normal to the surface of the mirror all lie in the same plane and the angle of incidence is equal to the angle of reflection.",
                "Plane Mirror: The images formed from a plane mirror are the reflected images in their normal proportions but reversed from left to right. These are the most widely used mirrors. || Concave Mirrors: These are the spherical mirrors that are curved inward and the image obtained from these mirrors depends on the placement of the object. || Convex Mirror: These are the spherical....",
                "Our ancestors relied on fire for light, warmth and cooking. Today at the flick of a switch, turn of a knob or the push of a button, we have instant power. This is possible because of the electric current. Electricity is one of the important discoveries that helped us transform our way of living. From the time we wake up till the time we sleep at night, our life is dependent....",
                "Conductors: Materials that allow electricity (by allowing the free flow of electrons from one particle to another) or heat to flow through them easily are called conductors. Some example of conductors of both heat and electricity include most metals like iron, silver and gold and so on. || Insulators: Materials that doesn't allow electricity (by restricting the free flow....",

                "All living organisms need energy to perform their day-to-day activities and to carry out various processes of their body. Energy is also required for growth, development, repair and maintenance of the body. We need energy even when we are sleeping. How do living organisms obtain this energy? The food we eat is the source of energy. Inside the cells, the digested food is burnt....",
                "The two steps involved in the process of respiration are breathing and cellular respiration: Breathing: The process of taking in oxygen-rich air and giving out carbon dioxide-rich air is called breathing. It is also called external respiration. The taking in of air is called inhalation and giving out of air is called exhalation. || Cellular Respiration: It is the process in....",
                "In humans, respiration takes place through a complex system of organs. These organs collectively make the respiratory system. The parts of the human respiratory system are nostrils, nasal cavity, pharynx, trachea, and lungs. || Nostrils and Nasal Cavity: The nostrils are external openings to let the air into the nasal cavity. Air is passed from nostrils through the nasal....",
                "In most of the organisms, oxygen is required for respiration, but some organisms such as yeast and some bacteria do not use oxygen for respiration. Thus, respiration is of two types aerobic respiration (presence of air) and anaerobic respiration (absence of air). || Aerobic Respiration: The respiration which is carried out in the presence of oxygen is called aerobic....",
                "Different animals, either microorganisms or higher animals, have different organs and mechanisms of breathing. Let us discuss different mechanisms of respiration in different organisms. || Respiration Through Skin: There are some organisms that respire through their body surface, for example, Amoeba, Euglena, and Paramecium. They take oxygen directly from the surroundings....",
                "All living organisms need food to sustain. The process of intake of food and its proper utilisation in the body is termed as nutrition. Components of food such as carbohydrates, fats, proteins, vitamins and minerals are called nutrients. Living organisms broadly exhibit two modes of nutrition- autotrophic (auto = self; trophic = to feed) and heterotrophic (hetero = another....",
                "The process by which plants prepere their own food is called photosynthesis. It is the proces by which plants produce glucose by utilising carbon dioxide, water, sunlight (solor energy). The leaves of plants contain a green pigment called chlorophyll. This pigment imparts green colour to the plants and traps the solar energy. Plants take in carbon dioxide from the surrounding....",
                "Some living organisms depend on other living organisms for food. These organisms have heterotrophic mode of nutrition and are called heterotrophs. All animals including humans and the plants that cannot carry out photosynthesis are heterotrophs. Monotropa and Cuscuta are examples of heterotrophic plants. Let us study different types of heterotrophic plants. || Parasitic Plants....",
                "The human digestive system is a complex series of organs and structures that work together to break down food and absorb nutrients. It is also known as alimentary canal or the digestive tract. It consists of several main parts:  Mouth: The digestive process begins in the mouth, where teeth mechanically break down food, and salivary glands release enzymes to start the chemical....",
                "The circulatory system, also known as the cardiovascular system, is a vital organ system in the human body responsible for the transportation of blood. It consists of the heart, blood vessels (arteries, veins, and capillaries), and blood. Blood: Blood is a red-coloured liquid which circulates through the circulatory system. There are two main components of blood: blood plasma....",
                "The excretory system, also known as the urinary system, is responsible for removing waste and excess materials from the human body, maintaining the body's internal balance, and regulating various physiological functions. It primarily consists of several key organs and structures:  Kidneys: The kidneys are bean-shaped organs located on either side of the spine, just below the....",
                "The nervous system is a complex and vital system in the human body responsible for transmitting signals, processing information, and controlling various physiological functions. The parts of the nervous system are: Brain: The brain is the central control center of the nervous system. It is responsible for processing sensory information, coordinating motor functions, and....",

                "We see a variety of objects, living or non-living in our life. They are of different shapes, colours and sizes. But, all of them are made up of matter. Anything that has mass, occupies space and can be perceived by our senses is called matter. Thus, the air we breathe, the water we drink and the chair we sit are also made of matter. But, not everything is matter: time....",
                "States of matter refer to the different physical forms that matter can exist in based on factors like temperature and pressure. There are 3 primary states of matter: Solid, Liquid and Gas. Each state has distinct properties and behaviors. Here's an difference of each states of matter: States of Matter/Properties || Solid  Definite Shape  Definite Volume  Tightly Packed....",
                "In our daily life, we see many changes in our surroundings. They are: Reversible Change:A change in which the orginal substances can be recovered by simple metheds is called Reversible Change. Eg: Water to ice by freezing and ice to water by melting, clay changing its shape using force, etc... || Irreversible Change:A change in which the orginal substances cannot be....",
                "A chemical change is known as a chemical reaction. The substance involved in the reaction are known as reactants, and the new substances formed during the reaction are known as products. Energy change is one of the characteristics of a chemical change, because of the formation of the new product. A chemical reaction is represented by a chemical equation. In some reactions....",
                "Separation of a mixture essentially means the removal of one substance from a mixture of two or more substances. We have to use such a property that one component of the mixture has and the others do not. You can easily separate a packet of assorted candies of different flavours into individual flavours by handpicking them. However, separation by handpicking becomes difficult....",

                "The main threats of climate change, stemming from the rising temperature of Earth's atmosphere include rising sea levels, ecosystem collapse and more frequent and severe weather. Rising temperatures from human-caused greenhouse gas emissions affects planet-wide systems in various ways.The potential future effects of global climate change include more frequent wildfires....",
                "Generating Power - Generating electricity and heat by burning fossil causes a large chunk of global emissions || Manufacturing Goods - Manufacturing and industry produce emissions, mostly from burning fossil fuels to produce energy for making things like cement, iron, steel, electronics, plastics, clothes, and other goods. Cutting Down Of Forest - Cutting down forests to....",
                "Hotter temperatures - As greenhouse gas concentrations rise, so does the global surface temperature. The last decade, 2011-2020, is the warmest on record. Since the 1980s, each decade has been warmer than the previous one. More severe storms - Destructive storms have become more intense and more frequent in many regions. As temperatures rise, more moisture evaporates || Increased....",
                "Many climate change solutions can deliver economic benefits while improving our lives and protecting the environment. We also have global frameworks and agreements to guide progress, such as the Sustainable Development Goals, the UN Framework Convention on Climate Change and the Paris Agreement. Three broad categories of action are: cutting emissions, adapting to climate impacts...."
            ]

            for(i=0; i<=cond.length-1; i++){
                if(cond[i].includes(input)){
                    NewElement = document.createElement('a');
                    NewElement.textContent = names[i];
                    NewElement.href = link[i];
                    NewElement.onclick = Close;
                    Result.appendChild(NewElement);
                    Result.appendChild(document.createElement('br'));
                    NewElement = document.createElement('h5')
                    NewElement.textContent = description[i];
                    Result.appendChild(NewElement);
                    NewElement = null;
                }
            }
            
            input = document.getElementById("searchbar").value;
            document.getElementById("input").textContent = input;
            document.getElementById("SearchResult").style.display = "flex";
        }
    } else{}
}

function Close(){
    document.getElementById("SearchResult").style.display = "none";
}

// Navbar Code
var nav_toggle = document.getElementById("input_toggle");
var dropdown_toggle = document.getElementById("Input_DT");
var arrows = document.querySelector(".arrows");
var nav_auto = document.querySelector(".navigation-auto");
var nav_manual = document.querySelector(".navigation-manual");
var image = document.getElementById("image");

function check() {
    if (nav_toggle.checked == false) {
        dropdown_toggle.checked = false;
    }

    var slideHeight = image.clientHeight; // Get the height of the slides element
    var marginTop = slideHeight / 2 - 10 + "px";
    nav_auto.style.marginTop = slideHeight - 20 + "px";
    nav_manual.style.marginTop = slideHeight - 20 + "px";
    arrows.style.marginTop = marginTop;
}

setInterval(check, 100);

banner();
Start_Timer();
