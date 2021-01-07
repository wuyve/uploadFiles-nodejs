const isPic = name => {
  let picture = ['png', 'jpg', 'jpeg', 'gif'];
  let lastName = name.split('.');
  lastName = lastName[lastName.length - 1];
  if (picture.indexOf(lastName) !== -1) {
    return 'image';
  }
  return 'file';
};
let result = isPic('111.gif..jpg');
console.log(result)
