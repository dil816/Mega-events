import mongoose from "mongoose";

const salarySchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
        basicSalary: {
          type: String,
          required: true,
        },
        attendance: {
          type: String,
          required: true,
        },

        allowance: {
          type: String,
          required: true,
        },
        epf: {
          type: String,
          required: true,
        },
        etf: {
          type: String,
          required: true,
        },
        tax: {
          type: String,
          required: true,
        },
        netSalary: {
          type: String,
          required: true,

      }
    },
      {
        timestamps: true,
      }
);


export const Salary = mongoose.model(`salary`, salarySchema);