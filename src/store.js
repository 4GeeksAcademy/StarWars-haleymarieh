export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    favorites: [],

  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
      case 'add_favorite':

      const { name, uid, url } = action.payload

      return {
        ...store,
        favorites:[...store.favorites, {name, uid, url}]
      };

      case 'remove_favorite':

      const { removename, removeuid, removeurl } = action.payload

      return {
        ...store,
        favorites: store.favorites.filter(
          (favorite) => favorite.url != removeurl
        )
       
      };
      
    default:
      throw Error('Unknown action.');
  }    
}
