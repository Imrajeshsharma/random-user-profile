import React from "react";

const UserCard = ({user}) => {

    const titleCase = (str) => {
        return str.toLowerCase().split(' ').map(function (word) {
            return word.replace(word[0], word[0].toUpperCase());
        }).join(' ');
    }

    return (
        <div className="flex w-[30vw] p-8 bg-white shadow-lg rounded-lg">
            <div className="p-6 w-[25vw] flex border-2 rounded-md border-gray-200">
            <img
                src={user.picture.large}
                alt="User Profile"
                className="w-100 h-100 rounded-lg mr-6 object-contain"
            />
            <div>
                <p className="text-2xl font-bold">
                    {user.name.first} {user.name.last}
                </p>
                <p className="text-gray-600 text-lg">Gender: {titleCase(user.gender)}</p>
                <p className="text-gray-600 text-lg w-[30wh]">Phone: {user.phone}</p>
            </div>
            </div>
        </div>
    );
};

export default UserCard;
