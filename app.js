db.collections('items').get().then((snapshot) => {
    console.log(snapshot.docs);
})