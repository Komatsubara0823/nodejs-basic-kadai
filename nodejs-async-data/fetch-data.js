// 外部データを取得
async function fetchData() {
  console.log('ユーザーデータの取得を開始します。');
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );

    const data = await response.json();

console.log(`取得件数: ${data.length}件`);

for (let i = 0; i < data.length; i++) {
  console.log(data[i].name);
}

console.log('ユーザーデータの取得が完了しました。');
  } catch (error) {
    res.status(500).json({
      message: 'データの取得に失敗しました'
    });
}
};

// 外部データを取得
console.log('fetchData()関数を実行します。');
fetchData();
console.log('fetchData()関数を実行しました。');

// 100ミリ秒ごとにメッセージを表示
let count = 1;
const interval = setInterval(() => {
  console.log(`別の処理を実行中... ${count++}`);
  if (count > 10) clearInterval(interval);
}, 100);
