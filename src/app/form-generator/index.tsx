"use client";
import React, { useState, useEffect, useContext } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Textarea } from '@/components/ui/textarea';

import { generateForm } from '@/actions/generateForm';
import { useFormState, useFormStatus } from 'react-dom';

import { useSession, signIn } from "next-auth/react";
import { navigate } from '../actions/navigateToForm';

import { Plus } from 'lucide-react';
import {usePlausible} from 'next-plausible'
import { motion } from 'framer-motion';
import { FormCountContext } from './FormCountContext';
import { getUserForms } from '../actions/getUserForms';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../space-landing/utils/motion";
type Props = {}

const initialState: {
  message: string;
  data?: any;
} = {
  message: ""
}

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Generating..." : "Generate"}
    </Button>
  );
}

const FormGenerator = (props: Props) => {
  const [state, formAction] = useFormState(generateForm, initialState);
  const [open, setOpen] = useState(false);
  const session = useSession();
  const plausible = usePlausible()



  useEffect(() => {
    if (state.message === "success") {
      setOpen(false);
      navigate(state.data.formId);
    }

  }, [state.message])


  const onFormCreate = () => {
    const formCount : number = 0;
      // alert(formCount)
      alert("If you encounter a 'client side error' when generating the form, simply REFRESH the page, you will be good to go! (sorry from our side)")
      if(formCount >= 3){
        alert("You have reached the maximum number of forms in a free account. Please subscribe to create more forms!");
      }
      else{
        plausible('create-form')
        if(session.data?.user) {
            setOpen(true);
          } else {
            signIn();
          }
      }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={onFormCreate} className='py-1 max-w-[160px] cursor-pointer'>
        <Plus className='w-4 h-4 mr-2 py'/>
        Create Form
      </Button>
       {/* <motion.a
          onClick={onFormCreate}
          variants={slideInFromLeft(1)}
          className="py-1 button-primary text-center text-white cursor-pointer rounded-lg max-w-[150px]"
        >
          Create Form
        </motion.a> */}

      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create New Form</DialogTitle>
        </DialogHeader>
        <form action={formAction}>
          <div className='grid gap-4 py-4'>
            <Textarea id="description" name="description" required placeholder='Share what your form is about, who is it for, and what information you would like to collect. And AI will do the magic ✨' />
          </div>
          <DialogFooter>
            <SubmitButton />
            <Button variant="link">Create Manually</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default FormGenerator