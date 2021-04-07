const moodList = document.querySelector('#mood-list');
const currDate = new Date().getTime();
const moodForm = document.querySelector('#add-mood-form');
const signupForm = document.querySelector('#myForm');

//create elements and render cafe
function renderMoods(doc){
    let li = document.createElement('li');
    let moodNum = document.createElement('span');
    let date = document.createElement('span');
    let user = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    moodNum.textContent = doc.data().mood;
    date.textContent = doc.data().date;

    li.appendChild(moodNum);
    li.appendChild(date);

    moodList.appendChild(li);
}

//getting data
db.collection('moods').get().then((snapshot) => {
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        renderMoods(doc);
    })
})

//saving data
moodForm.addEventListener('submit', (e) => {
    //prevents the entire page from being refreshed
    e.preventDefault();
    db.collection('moods').add({
        mood: moodForm.mood.value,
        date: new Date(),
        // user: db.collection('users').get().doc(uid)

    })
    moodForm.mood.value = '';

})
