"use client";

import dynamic from 'next/dynamic';


// 로딩 넣을 거면 여기에 넣으셈
// 이거의 존재를 몰랐음
const Dashboard = dynamic(() => import('./__page'));

function Dashboard_Dynamic() {
    return (
        <Dashboard/>
    );
}

export default Dashboard_Dynamic;