import { useState } from 'react';

const [datas, setDatas] = useState([
    {CL_Name:"", CL_Question:"", CL_Story:""},
]);

const handleDataAdd = () => {
    setDatas([
        ...datas,
        {CL_Name:"", CL_Question:"", CL_Story:""},
    ]);
};

const handleDataRemove = (index: number) => {
    const filterData = [...datas];
    filterData.splice(index, 1);
    setDatas(filterData);
};

const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
) => {
    const list = [...datas] as any;
    list[index][e.target.id] = e.target.value;
    setDatas(list);
};