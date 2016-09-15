export default function auth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Doron Segal',
        username: 'doron2402',
        token: 'asdfjnkj2n34jkn1234kj12k3jnkjqn3241324',
        uid: 'doron2402-123',
        avatar: 'http://nodesummit.com/wp-content/uploads/doron-segal-185x185.jpg',
      })
    }, 2000)
  })
}
