const firebaseConfig = {
    apiKey: "AIzaSyDHEdTvQ20kQeifRiTTDFOYGwZx8T8L5_Q",
    authDomain: "project-ij-eeaa4.firebaseapp.com",
    databaseURL: "https://project-ij-eeaa4-default-rtdb.firebaseio.com",
    projectId: "project-ij-eeaa4",
    storageBucket: "project-ij-eeaa4.appspot.com",
    messagingSenderId: "268146628075",
    appId: "1:268146628075:web:ce590e51c5b2eaad5235ae",
    measurementId: "G-KNENBHERVZ"
  };

// 파이어베이스 앱 초기화
const app = firebase.initializeApp(firebaseConfig);

// 파이어베이스 실시간 데이터베이스 생성   
const database = firebase.database();

// 데이터 저장 실습
function writeUserData(userId, email, nick) {
    database.ref("users/"+userId).set({
      email: email,
      nick : nick
    });
}



// 2. 특정 사용자 조회
// - id값 입력받은 후 해당 사용자의 email, nick 출력
function readUserData(){
    database.ref("users/").on('value',(snapshot)=>{
        // 실시간 데이터베이스 값 접근
        console.log(snapshot.val());

        let data = snapshot.val();
        let keys = Object.keys(data);


        console.log(Object.keys(data));
        console.log(data["asdf"]);
        console.log(data[keys[0]]);

        const result = document.getElementById("result");

        //데이터베이스 웹 페이지 출력
        result.innerText = `${data[keys[0]].email} / ${data[keys[0]].nick}`;
    })
}

////////////////////////////////////////////////////////
const btn = document.frm.btn;
const readBtn = document.getElementById("readBtn");

readBtn.addEventListener("click",()=>{
    readUserData();
});

btn.addEventListener("click", (event)=> {
    // 기본 제출 동작을 막음
    event.preventDefault();
    // 아이디와 닉네임 입력값을 가져옴
    const id = document.frm.id.value;
    const email = document.frm.email.value;
    const nick = document.frm.nick.value;


     // 콘솔에 아이디와 닉네임을 출력
    console.log('아이디:', id);
    console.log('이메일:', email);
    console.log('닉네임:', nick);

    writeUserData(id, email, nick);

 });