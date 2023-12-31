'use client'

import {BsGithub, BsGoogle} from 'react-icons/bs'
import Button from '@/app/components/Button'
import Input from '@/app/components/inputs/Input'
import React, {useState,useCallback} from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import AuthSocialButton from './AuthSocialButton'

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
	const [variant, setVariant] = useState<Variant>('LOGIN')
	const [isLoading, setisLoading] = useState(false)

	const toggleVariant = useCallback(
		() => {
			if (variant === 'LOGIN') {
				setVariant('REGISTER')
			} else {
				setVariant('LOGIN')
			}
		},
		[variant],
	)
	
	const {
		register,
		handleSubmit,
		formState: {
			errors
		}
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		}
	})
	
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setisLoading(true)

		if (variant === 'REGISTER') {
			// Axios Register
		}

		if (variant === 'LOGIN') {
			// NextAuth SignIn
		}
	}

	const socialAction = (action: string) => {
		setisLoading(true)

		// NextAuth Social SignIn
	}

	return (
		<div
			className='
				mt-8
				sm:max-w-md
				sm:mx-auto
				sm:w-full'
		>
			<div
				className='
					px-4
					py-8
					shadow
					sm:px-10
					sm:rounded-lg
					bg-white'
			>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='
						space-y-6'
				>
					{variant === 'REGISTER' && (
						<Input 
							errors={errors} 
							id='name' 
							label='Name' 
							register={register} 
							disabled={isLoading}
						/>
					)}
					<Input errors={errors} 
						id='email' 
						label='Email address' 
						type='email' 
						register={register} 
						disabled={isLoading}
					/>
					<Input errors={errors} 
						id='password' 
						label='Password' 
						type='password' 
						register={register} 
						disabled={isLoading}
					/>
					<div>
						<Button
							disabled={isLoading}
							fullWidth
							type='submit'
						>
							{variant === 'LOGIN' ? 'Sign in' : 'Register'}
						</Button>
					</div>
				</form>

				<div className='mt-6'>
					<div className='relative'>
						<div
							className='
								absolute
								inset-0
								flex
								items-center'
						>
							<div
								className='
									w-full
									border-t
									border-gray-300'
							/>
						</div>
						<div
							className='
								relative
								flex
								justify-center
								text-sm'
						>
							<span
								className='
									px-2
									bg-white
									text-gray-500'
							>
								Or continue with
							</span>
						</div>
					</div>

					<div
						className='
							mt-6
							flex
							gap-2'
					>
						<AuthSocialButton 
							icon={BsGithub}
							onClick={()=>socialAction('github')}
						/>
						<AuthSocialButton 
							icon={BsGoogle}
							onClick={()=>socialAction('google')}
						/>
					</div>
				</div>
				
				<div
					className='
						flex
						gap-2
						justify-center
						text-sm
						mt-6
						px-2
						text-gray-500'
				>
					<div>
						{variant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?'}
					</div>
					<div
						onClick={toggleVariant}
						className='
							underline
							cursor-pointer'
					>
						{variant === 'LOGIN' ? 'Create an account' : 'Login'}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AuthForm