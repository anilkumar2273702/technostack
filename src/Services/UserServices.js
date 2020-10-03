class UserServices {
       LoginUser(API, data) {
              return new Promise((resolve, reject) => {
                     fetch(API, {
                            method: 'post',
                            body: JSON.stringify(data)
                     }).then((response) => response.json())
                            .then((responseJson) => {
                                   resolve(responseJson);
                            })
       .catch((error) => {
              console.error(error);
       });
              });
       }
}
export default UserServices;