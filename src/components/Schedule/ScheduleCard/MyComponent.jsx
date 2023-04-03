import { observer } from 'mobx-react-lite';

const MyComponent = observer(({ store }) => {
  let data = '';

  if (store.schedule.status) {
    data = JSON.parse(store.schedule.data);
  }
  console.log(data);

  const show = (data) => {
    Object.keys(data).forEach((key) => {
      console.log(`key: ${key}`);
      const day = data[key];

      Object.keys(day).forEach((key) => {
        // console.log(`key day: ${key}, value: ${day[key]}`);

        const pairs = day[key];
        Object.keys(pairs).forEach((key) => {
          // console.log(`key pairs: ${key}, value: ${pairs[key]}`);
          console.log(`key pairs: ${key}, value: ${pairs[key]['sbj']}`);
          console.log(`key pairs: ${key}, value: ${pairs[key]['teacher']}`);

          // const pair = pairs[key];
          // Object.keys(pair).forEach((key) => {
          //   console.log(`key pair: ${key}, value: ${pair[key]['sbj']}`);
          //   console.log(`key pair: ${key}, value: ${pair[key]}`);
          //   console.log(`key pair: ${key}, value: ${pair[key]}`);
          // });
        });
      });
      // if (typeof data[key] === 'object' && data[key] !== null) {
      //   iterate(data[key]);
      // }
    });
  };

  // const iterate = (obj) => {
  //   Object.keys(obj).forEach((key) => {
  //     console.log(`key: ${key}, value: ${obj[key]}`);

  //     if (typeof obj[key] === 'object' && obj[key] !== null) {
  //       iterate(obj[key]);
  //     }
  //   });
  // };

  return (
    <div>
      <h2>{store.schedule.group}</h2>
      {store.schedule.status && <p>{show(data)}</p>}
    </div>
  );
});

export default MyComponent;
