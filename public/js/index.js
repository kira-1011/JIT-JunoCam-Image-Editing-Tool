//Grab Html elements that are needed
const metadataList = document.getElementById("metadata_list"); 
const closeBtn = document.getElementById("close");

//Event handler function that is called when 'view details' button is clicked
function toggle(e){

    //Grab the important HTML elements
    var blur = document.getElementById('blur');

    //Set the class toggle to active 
    blur.classList.toggle('active');

    //Grab the important HTML elements
    var popup = document.getElementById('popup');

    //Set the class toggle to active 
    popup.classList.toggle('active');

    //Grab the important HTML elements
    var images = document.getElementsByClassName("images");

    //If the element is not undefined
    if(e)
    {
        //Parse the JSON metadata to javascript object 
        const metadata = JSON.parse(e.dataset.metadata);

        //iterate over the metadata object and append list elements 
        //that contain metadata property and its corresponding value
        for(let property in metadata)
        {
            const list = document.createElement("li");

            list.className = "dropdown-item";
            list.textContent = `${property}: ${metadata[property]}`;
            metadataList.appendChild(list);
        }
        

        document.getElementById("popup_image").src = images[e.dataset.num].src;
        document.getElementById("downloadImage").href = `/images/downloads/${13537 + Number(e.dataset.num)}-ImageSet.zip`;
        document.getElementById("downloadData").href = `/images/downloads/${13537 + Number(e.dataset.num)}-Data.zip`;
        const altImages = document.getElementById("altImages");

        altImages.children[0].src = images[e.dataset.num].src.replace("mapprojected", "red"); 
        altImages.children[1].src = images[e.dataset.num].src.replace("mapprojected", "green");
        altImages.children[2].src = images[e.dataset.num].src.replace("mapprojected", "blue");
    }

}

//Define removeAllchild function to remove all child of a container element
const removeAllChild = () => {
    while(metadataList.childElementCount)
        metadataList.removeChild(metadataList.firstElementChild);
};

//Listen for click event when the close button is clicked and call toggle() and removeAllChild() functions 
closeBtn.addEventListener("click", () => {
    toggle();
    removeAllChild();
});


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));