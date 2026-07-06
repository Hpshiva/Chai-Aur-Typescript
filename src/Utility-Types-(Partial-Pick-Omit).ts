// Original User type
type User = {
    id: number;
    name: string;
    age: number;
    email: string;
};

/* =====================================================
   PARTIAL<T>
   - Makes all properties optional
   - Useful for update forms, PATCH APIs, filters, etc.
   ===================================================== */

function testPartial(data: Partial<User>) {
    console.log(data);
    return { data };
}

// Only age and email provided
testPartial({
    age: 34,
    email: "shivakumar.bfgi@gmail.com",
});

// Empty object is also valid because all fields are optional
testPartial({});

/*
Equivalent type:

{
    id?: number;
    name?: string;
    age?: number;
    email?: string;
}
*/


/* =====================================================
   PICK<T, K>
   - Selects only specific properties from a type
   - Useful when a component/API needs only a few fields
   ===================================================== */

function testPick(data: Pick<User, "name" | "email">) {
    console.log(data);
    return { data };
}

testPick({
    name: "chai",
    email: "shivakumar.bfgi@gmail.com",
});

/*
Equivalent type:

{
    name: string;
    email: string;
}
*/


/* =====================================================
   OMIT<T, K>
   - Removes specific properties from a type
   - Useful when you want most fields except a few
   ===================================================== */

function testOmit(data: Omit<User, "age">) {
    console.log(data);
    return { data };
}

testOmit({
    id: 3,
    name: "shiva",
    email: "something@somthing.com",
});

/*
Equivalent type:

{
    id: number;
    name: string;
    email: string;
}
*/


/* =====================================================
   QUICK INTERVIEW NOTES
   =====================================================

   Partial<User>
   ➜ All properties become optional

   Pick<User, "name" | "email">
   ➜ Keep only name and email

   Omit<User, "age">
   ➜ Remove age, keep everything else

   Real-world examples:

   Partial<User>
   ➜ User update form
   ➜ PATCH API request

   Pick<User, "name" | "email">
   ➜ Profile card component
   ➜ Login/Register screens

   Omit<User, "age">
   ➜ Public user data
   ➜ Remove unwanted fields before sending data
*/