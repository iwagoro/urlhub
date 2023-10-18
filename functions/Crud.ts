import React from "react";
import db from "./firebase";
import { collection, getDocs, doc, setDoc, deleteDoc, updateDoc, addDoc, query, limit, where, orderBy, startAt, endAt } from "firebase/firestore";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

//get url/preset data
const getData = async (email: string, type: string, num: number) => {
    let data: any = [];
    const collectionRef = collection(db, "User", email, type);
    const q = query(collectionRef, limit(num));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); // ドキュメントのデータをオブジェクトとして追加
    });

    return data;
};

const getRecentData = async (email: string, type: string, num: number) => {
    let data: any = [];
    const collectionRef = collection(db, "User", email, type);
    const q = query(collectionRef, orderBy("date"), limit(num));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); // ドキュメントのデータをオブジェクトとして追加
    });

    return data;
};

//get url/preset data with field name
const getDataWithLowName = async (email: string, type: string, name: string, num: number) => {
    let tmp = {};
    const collectionRef = collection(db, "User", email, type);
    const q = query(collectionRef, orderBy("lowName"), startAt(name), endAt(name + "\uf8ff"), limit(num));
    const snapshot = await getDocs(q);
    const result = snapshot.docs.map((doc) => doc.data());
    return result;
};

//set data with random name
const addData = async (email: string, type: string, data: any) => {
    const collectionRef = collection(db, "User", email, type);
    await addDoc(collectionRef, data);
};

const setData = async (email: string, type: string, name: string, data: any) => {
    const docRef = doc(db, "User", email, type, name);
    await setDoc(docRef, data);
};

//set data with specified name
const updateData = async (email: string, type: string, name: string, data: any) => {
    const docRef = doc(db, "User", email, type, name);
    await updateDoc(docRef, data);
};

//delete data with specified name
const deleteData = async (email: string, type: string, name: string) => {
    const docRef = doc(db, "User", email, type, name);
    await deleteDoc(docRef);
};
export { getData, setData, updateData, addData, deleteData, getDataWithLowName, getRecentData };
