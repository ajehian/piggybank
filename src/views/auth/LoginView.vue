<script setup lang="ts">
import { useForm } from 'vee-validate'
import { z } from 'zod'
import { PiggyBank } from 'lucide-vue-next'
import { alphanumericRegex, numericRegex } from '@/helpers/validationRegex'
import {
  fixedLengthMsg,
  isAlphanumericMsg,
  isNumericMsg,
  requiredMsg,
} from '@/helpers/validationMessages'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import GlowBorder from '@/components/ui/glow-border/GlowBorder.vue'
import FormInput from '@/components/FormInput.vue'

const schema = z.object({
  username: z
    .string({ error: requiredMsg('Username') })
    .nonempty({ error: requiredMsg('Username') })
    .regex(alphanumericRegex, isAlphanumericMsg('Username')),
  password: z
    .string({ error: requiredMsg('Password') })
    .nonempty({ error: requiredMsg('Password') }),
  group_code: z
    .string({ error: requiredMsg('Group code') })
    .nonempty({ error: requiredMsg('Group code') })
    .regex(numericRegex, isNumericMsg('Group code'))
    .length(3, fixedLengthMsg('Group code', 3)),
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
                />
              </Field>
              <Field>
                <div class="flex items-center">
                  <FieldLabel for="group_code">Group code</FieldLabel>
                </div>
                <FormInput
                  name="group_code"
                  id="group_code"
                  type="text"
                  placeholder="Enter your group code"
                  maxlength="3"
                />
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
