import React, { useEffect } from "react";
import { Label } from "../../components/Elements/label";
import { Input } from "../../components/Elements/input";
import { Field } from "../../components/Elements/field";
import { Button } from "../../components/Elements/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { values } from "lodash";
import logoImgage from "../../assets/login.jpg";
import { toast } from "react-toastify";

const AddNewCategory = () => {
  const schema = yup.object({
    categoryName: yup
      .string()
      .required("Name can not be empty. Please Re-Typing!"),
    slug: yup.string().required("Slug can not be empty. Please Re-Typing!"),
  });

  const handleAddCategory = (values) => {
    console.log(values);
  };

  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const errArr = Object.values(errors);
    if (errArr.length > 0) {
      toast.error(errArr[0]?.message, {
        pauseOnHover: false,
      });
    }
  }, [errors]);

  return (
    <div className="grid grid-cols-3 gap-1 mt-10">
      <div className="col-span-1 ml-5">
        <h1 className="text-4xl font-bold ">Create Category</h1>

        <img className="" src={logoImgage} alt="" />
      </div>
      <div className="col-span-2">
        <form
          className="m-5 h-full rounded-lg shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] p-10"
          onSubmit={handleSubmit(handleAddCategory)}
        >
          <Field>
            <Label>Category name: </Label>
            <Input
              control={control}
              name="categoryName"
              type="text"
              placeholder="Typing category name ..."
            ></Input>
          </Field>
          <Field>
            <Label>Category Slug:</Label>
            <Input
              control={control}
              name="slug"
              type="text"
              placeholder="Typing category slug..."
            ></Input>
          </Field>
          <Button type="submit">Create Category</Button>
        </form>
      </div>
    </div>
  );
};

export default AddNewCategory;
