import React from "react";

const UserProfileUpdate = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center ">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="max-w-[400px] w-full mx-auto bg-gray-200 p-4 rounded-lg"
      >
        <h2 className="text-4xl font-bold text-center py-6">CodeTrungCode</h2>

        <Field>
          <Label htmlFor="fullname">UserName</Label>
          <Input
            name="username"
            placeholder="Typing your username ..."
            type="text"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            name="address"
            placeholder="Typing your address ..."
            control={control}
          ></Input>
        </Field>
        <div className="flex flex-col gap-3 mb-5">
          <Label>Gender</Label>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-x-3">
              <Radio control={control} name="gender" value="male"></Radio>
              <span>Male</span>
            </div>
            <div className="flex items-center gap-x-3">
              <Radio control={control} name="gender" value="female"></Radio>
              <span>Female</span>
            </div>
          </div>
        </div>

        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Typing your password ..."
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="rePassword">Re-Password</Label>
          <Input
            type="text"
            name="rePassword"
            placeholder="Typing your password ..."
            control={control}
          ></Input>
        </Field>

        {/* <Button>Sign In</Button> */}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default UserProfileUpdate;
