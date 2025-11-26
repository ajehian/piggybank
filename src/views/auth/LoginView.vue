<script setup lang="ts">
import { useForm } from 'vee-validate'
import { z } from 'zod'
import { PiggyBank } from 'lucide-vue-next'
import { alphanumericRegex, integerRegex } from '@/helpers/validationRegex'
import {
  isAlphanumericMsg,
  isIntegerMsg,
  minLengthMsg,
  maxLengthMsg,
  requiredMsg,
} from '@/helpers/validationMessages'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import GlowBorder from '@/components/ui/glow-border/GlowBorder.vue'
import FormInput from '@/components/FormInput.vue'

const schema = z.object({
  username: z
    .string(requiredMsg('Username'))
    .nonempty(requiredMsg('Username'))
    .min(3, minLengthMsg('Username', 3))
    .max(50, maxLengthMsg('Username', 50))
    .regex(alphanumericRegex, isAlphanumericMsg('Username')),
  password: z
    .string(requiredMsg('Password'))
    .nonempty(requiredMsg('Password'))
    .min(5, minLengthMsg('Password', 5))
    .max(75, maxLengthMsg('Password', 75)),
  code: z
    .string(requiredMsg('Group code'))
    .nonempty(requiredMsg('Group code'))
    .regex(integerRegex, isIntegerMsg('Group code')),
})

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit(async () => {
  alert('submitted')
})
</script>

<template>
  <div class="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
    <div class="w-full max-w-md">
      <Card class="relative">
        <GlowBorder
          :color="['#A07CFE', '#FE8FB5', '#FFBE7B']"
          :border-radius="14"
          :border-width="1"
        />
        <CardHeader>
          <PiggyBank class="mx-auto" :size="64" :stroke-width="2" />
          <CardTitle class="text-center">Login to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form @submit="onSubmit">
            <FieldGroup class="gap-4">
              <Field>
                <FieldLabel for="username">Username</FieldLabel>
                <FormInput
                  name="username"
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  min="3"
                  maxlength="50"
                />
              </Field>
              <Field>
                <div class="flex items-center">
                  <FieldLabel for="password">Password</FieldLabel>
                </div>
                <FormInput
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  min="5"
                  maxlength="75"
                />
              </Field>
              <Field>
                <div class="flex items-center">
                  <FieldLabel for="code">Group code</FieldLabel>
                </div>
                <FormInput name="code" id="code" type="text" placeholder="Enter your group code" />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
