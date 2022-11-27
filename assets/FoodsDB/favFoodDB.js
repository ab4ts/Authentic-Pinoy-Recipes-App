let FavFood = [ 3, 1 ];

export function fetchFav(){
  return FavFood;
}

export function addFav(id){
  if(!FavFood.find((food) => food == id)){
    FavFood.push(id);
  }
}

export function deleteFav(id){
  const index = FavFood.indexOf(id);
  if(index > -1){
    FavFood.splice(index, 1);
  }
} 

export default FavFood;