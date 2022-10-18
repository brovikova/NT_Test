'use strict';

let siteWidth = document.documentElement.clientWidth;
let trips = document.querySelectorAll('.trip');

let widthOneTimeTableList;
    if (siteWidth < 1024) {
        widthOneTimeTableList = 69;
    } 
    
    if (siteWidth >= 1024) {
        widthOneTimeTableList = 79;
    }

// Mobile and Tablet

if (siteWidth < 800) {

    for (let trip of trips) {
        let maxWidthBlock = trip.querySelector('.desc-items>li:last-of-type').clientWidth - 36;
        let allTimeTable = trip.querySelector('.time-trip');
        let newAllTimeTable = Array.from(allTimeTable.children)
        let allTimeTableWidth = trip.querySelector('ul.time-trip').clientWidth;
   
        if (allTimeTableWidth > maxWidthBlock) {
            let amountTimeSlot = Math.floor(maxWidthBlock / widthOneTimeTableList) - 1;
            let hiddenTimeTable = newAllTimeTable.slice(amountTimeSlot);
    
            // Создание кнопок Еще и Скрыть

            let moreButton = document.createElement('li');
            moreButton.classList.add('more-btn');
            moreButton.innerText = 'еще...';
                
            let hideButton = document.createElement('span');
            hideButton.classList.add('hide-btn');
            hideButton.innerText = 'скрыть';

            moreButton.addEventListener('click', function () {
                hiddenTimeTable.map(elem => {
                    elem.classList.remove('hidden');
                    allTimeTable.style.flexWrap = 'wrap';
                });
                allTimeTable.after(hideButton);
                this.remove();
            })
    
            hideButton.addEventListener('click', function () {
                hiddenTimeTable.map(elem => {
                    elem.classList.add('hidden');
                    allTimeTable.style.flexWrap = 'nowrap';
                });
                allTimeTable.append(moreButton);
                this.remove();
            });
            hiddenTimeTable.map(el => el.classList.add('hidden'));
            allTimeTable.append(moreButton);
        }
    }

} else {

    // Desktop

    for (let trip of trips) {
        let lastListBlock = trip.querySelector('.desc-items>li:last-of-type');
        let maxWidthBlock = lastListBlock.offsetWidth;
        let allTimeTable = lastListBlock.querySelector('.time-trip');
        let newAllTimeTable = Array.from(allTimeTable.children);
        let textBlockWidth = lastListBlock.firstElementChild.offsetWidth;
        let allTimeTableWidth = allTimeTable.offsetWidth + textBlockWidth + 30;
        console.log(allTimeTableWidth, maxWidthBlock, textBlockWidth)
        if (allTimeTableWidth > maxWidthBlock) {
            let amountTimeSlot = Math.floor((maxWidthBlock - textBlockWidth - 30) / widthOneTimeTableList) - 1;
            let hiddenTimeTable = newAllTimeTable.slice(amountTimeSlot);
            console.log(amountTimeSlot)
            // Создание кнопок Еще и Скрыть

            let moreButton = document.createElement('li');
            moreButton.classList.add('more-btn');
            moreButton.innerText = 'еще...';
                
            let hideButton = document.createElement('span');
            hideButton.classList.add('hide-btn');
            hideButton.innerText = 'скрыть';

            
            moreButton.addEventListener('click', function () {
                hiddenTimeTable.map(elem => {
                    elem.classList.remove('hidden');
                    
                });
                allTimeTable.style = `flex-wrap: wrap;
                                      width: ${(amountTimeSlot + 1) * widthOneTimeTableList + 30}px;`
                allTimeTable.append(hideButton);
                this.remove();
            })
    
            hideButton.addEventListener('click', function () {
                hiddenTimeTable.map(elem => {
                    elem.classList.add('hidden');
                });
                allTimeTable.style.flexWrap = 'nowrap';
                allTimeTable.append(moreButton);
                this.remove();
            });
            hiddenTimeTable.map(el => el.classList.add('hidden'));
            allTimeTable.append(moreButton);
        }
    }
}



