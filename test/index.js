const data = await fetch("https://apis.naver.com/cafe-web/cafe-articleapi/v2/cafes/27842958/articles/7111734?fromList=true&useCafeId=true&buid=e526fe64-165f-46e4-8c4e-50a5a9b1de5b", {
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': 'https://m.cafe.naver.com'
    }
});

console.log(await data.json());