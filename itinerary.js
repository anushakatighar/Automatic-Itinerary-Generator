function getQueryParams() {
    let params = new URLSearchParams(window.location.search);
    return {
        destination: params.get("destination"),
        days: params.get("days")
    };
}

function displayItinerary() {
    let { destination, days } = getQueryParams();
    
    if (!destination || !days) {
        document.getElementById("itinerary-title").innerText = "Invalid Itinerary";
        return;
    }

    document.getElementById("itinerary-title").innerText = `Your Trip to ${destination}`;

    let itineraryList = document.getElementById("itinerary-list");
    itineraryList.innerHTML = "";

    let sampleItineraries = {
        "Goa": ["Relax at the beach", "Visit Fort Aguada", "Explore Old Goa churches"],
        "Rajasthan": ["Visit Jaipur's Amer Fort", "Camel safari in Jaisalmer", "Boat ride in Udaipur"],
        "Kerala": ["Houseboat cruise in Alleppey", "Visit Munnar Tea Gardens", "Enjoy beaches in Kovalam"],
        "Maharashtra": ["Visit the Gateway of India", "Explore Elephanta Caves", "Enjoy the beaches of Alibaug"],
        "Tamil Nadu": ["Visit Meenakshi Temple", "Explore Kanyakumari", "Chill at Marina Beach"],
        "Uttarakhand": ["Go trekking in Rishikesh", "Visit Nainital Lake", "Explore Jim Corbett National Park"],
        "Karnataka": ["Explore Bangalore Palace", "Visit Mysore Palace", "Enjoy Coorg's coffee plantations"],
        "Uttar Pradesh": ["Visit the Taj Mahal", "Explore Agra Fort", "Visit Varanasi's Ghats"],
        "West Bengal": ["Explore Victoria Memorial", "Visit Darjeeling Tea Gardens", "Enjoy the beaches of Digha"],
        "Himachal Pradesh": ["Go skiing in Manali", "Visit Shimla Ridge", "Trek to Triund"],
        "Punjab": ["Visit the Golden Temple", "Explore Amritsar's markets", "Relax at Sukhna Lake"],
        "Madhya Pradesh": ["Visit the Khajuraho Temples", "Explore Bandhavgarh National Park", "Visit Sanchi Stupa"],
        "Bihar": ["Explore Nalanda University ruins", "Visit Patna Sahib", "See Bodh Gaya temples"],
        "Odisha": ["Explore Jagannath Temple", "Relax at Puri Beach", "Visit Konark Sun Temple"],
        "Assam": ["Take a tea plantation tour", "Go to Kaziranga National Park", "Visit Kamakhya Temple"],
        "Chhattisgarh": ["Explore Chitrakote Waterfalls", "Visit Kanger Valley National Park", "Go to Bastar Dussehra festival"],
        "Haryana": ["Visit the Surajkund Mela", "Explore Kurukshetra", "Visit Sultanpur Bird Sanctuary"],
        "Jharkhand": ["Go to Ranchi's Hundru Falls", "Explore Betla National Park", "Visit Rajrappa Temple"],
        "Uttarakhand": ["Go trekking in Rishikesh", "Visit Nainital Lake", "Explore Jim Corbett National Park"],
        "Gujarat": ["Visit the Rann of Kutch", "Explore Somnath Temple", "Go on a safari at Gir National Park"],
        "Andhra Pradesh": ["Visit the Tirupati Temple", "Relax at Araku Valley", "Explore Amaravati's Buddhist Stupa"],
        "Telangana": ["Visit Charminar", "Explore Golconda Fort", "Relax at Hussain Sagar Lake"],
        "Mizoram": ["Go trekking in Phawngpui", "Visit Reiek", "Explore Lallawng Reserve Forest"],
        "Nagaland": ["Visit Kohima War Cemetery", "Explore Dzukou Valley", "Visit Hornbill Festival"],
        "Manipur": ["Visit Loktak Lake", "Explore Keibul Lamjao National Park", "Go trekking to Mt. Iso"],
        "Meghalaya": ["Visit Cherrapunji", "Explore Nohkalikai Falls", "Trek in the Khasi Hills"],
        "Tripura": ["Visit Ujjayanta Palace", "Explore Neermahal", "Visit Sepahijala Wildlife Sanctuary"],
        "Arunachal Pradesh": ["Visit Tawang Monastery", "Explore Namdapha National Park", "Visit Sela Pass"],
        "Sikkim": ["Visit Tsomgo Lake", "Explore Rumtek Monastery", "Go trekking to Goecha La"],
        "Lakshadweep": ["Relax on Kadmat Island", "Visit Bangaram Island", "Go scuba diving in Agatti"],
        "Andaman and Nicobar Islands": ["Visit Havelock Island", "Explore Ritchie's Archipelago", "Snorkel in Neil Island"],
    };

    let itinerary = sampleItineraries[destination] || ["Explore city landmarks", "Try local cuisine", "Visit museums"];

    for (let i = 0; i < Math.min(days, itinerary.length); i++) {
        let li = document.createElement("li");
        li.textContent = `Day ${i + 1}: ${itinerary[i]}`;
        itineraryList.appendChild(li);
    }

    let imageLinks = {
        "Goa": "https://i.pinimg.com/474x/d1/80/95/d18095e2d4de3ab6737d028f4e1484ed.jpg",
        "Rajasthan": "https://i.pinimg.com/474x/35/cd/74/35cd74296efc62817dd1024c5ef9b107.jpg",
        "Kerala": "https://i.pinimg.com/736x/c0/3c/1c/c03c1ce317c17041b7c5242976260a6c.jpg",
        "Maharashtra": "https://i.pinimg.com/474x/4e/9d/27/4e9d27ad93f9b46cca0d5a7fc429be72.jpg",
        "Tamil Nadu": "https://i.pinimg.com/474x/f7/e7/69/f7e7691ab03e2cba13d84a907cdbec89.jpg",
        "Uttarakhand": "https://i.pinimg.com/474x/56/c6/35/56c6351541244573f72d0126a103f6cd.jpg",
        "Karnataka": "https://i.pinimg.com/736x/3f/11/30/3f11304b704850cb6ad8e27e6a3a56cb.jpg",
        "Uttar Pradesh": "https://i.pinimg.com/474x/d9/5e/59/d95e59f44da8c4ef35b09c6dcf6c38eb.jpg",
        "West Bengal": "https://i.pinimg.com/736x/98/8e/4e/988e4e8ee5eddbd67a8fac0843174b84.jpg",
        "Himachal Pradesh": "https://i.pinimg.com/736x/3f/11/30/3f11304b704850cb6ad8e27e6a3a56cb.jpg",
        "Punjab": "https://i.pinimg.com/474x/50/05/d5/5005d52da44eadb9064ebd8da148d7e8.jpg",
        "Madhya Pradesh": "https://i.pinimg.com/736x/3c/ff/78/3cff78c64204f3f56c1af3ae5bfefd91.jpg",
        "Bihar": "https://i.pinimg.com/474x/35/cd/74/35cd74296efc62817dd1024c5ef9b107.jpg",
        "Odisha": "https://i.pinimg.com/474x/08/7d/e8/087de8e7d8f54ee4ea9af30bfa924409.jpg",
        "Assam": "https://i.pinimg.com/474x/cf/31/99/cf319904292abab683d4a2d831af7f68.jpg",
        "Chhattisgarh": "https://i.pinimg.com/474x/a3/f1/03/a3f103d1777710668578ee3d04f12d87.jpg",
        "Haryana": "https://i.pinimg.com/474x/85/f1/13/85f11318e84f04297b0a87fbbd3113ac.jpg",
        "Jharkhand": "https://i.pinimg.com/474x/1a/8a/16/1a8a16d770f4114f3d1c4f307b673082.jpg",
        "Gujarat": "https://i.pinimg.com/474x/9a/ed/dc/9aeddceb5397f6a5e0c44d8a785881cb.jpg",
        "Andhra Pradesh": "https://i.pinimg.com/736x/da/f5/20/daf520222f8200334e776fc65b15222a.jpg",
        "Telangana": "https://i.pinimg.com/474x/93/32/f8/9332f8a07ae4551efeec53325f0917c6.jpg",
        "Mizoram": "https://i.pinimg.com/736x/d1/e9/42/d1e94257edac0698be7d4373fb8621b8.jpg",
        "Nagaland": "https://i.pinimg.com/474x/d4/7a/89/d47a89a60e97f5d0f6d849e6d1f6c97a.jpg",
        "Manipur": "https://i.pinimg.com/474x/71/d0/7e/71d07e516c104e5aca41e11e6a8ff6ef.jpg",
        "Meghalaya": "https://i.pinimg.com/474x/a3/16/a4/a316a4af183a31c3aca1d19728a7de0f.jpg",
        "Tripura": "https://i.pinimg.com/474x/5f/c7/c9/5fc7c9d1403ac11e03a077cc87373880.jpg",
        "Arunachal Pradesh": "https://i.pinimg.com/474x/2a/b8/2b/2ab82b8337407d5d0c8c0f3232ab60b6.jpg",
        "Sikkim": "https://i.pinimg.com/474x/cd/51/c1/cd51c134b0c398ee32c46ead8215f735.jpg",
        "Lakshadweep": "https://i.pinimg.com/474x/f4/63/c6/f463c63423fe47f5b82157dc4f2f22ca.jpg",
        "Andaman and Nicobar Islands": "https://i.pinimg.com/474x/59/e6/21/59e62183b392bd7cfae70d68ed65e49c.jpg",
    };

    // Set the background image for the entire page (body)
    document.body.style.backgroundImage = `url(${imageLinks[destination] || "images/default.jpg"})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}

function goBack() {
    window.location.href = "index.html";
}

window.onload = displayItinerary;
