Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users
  resources :products
  resources :orders
  post "/signin" => "sessions#create", as: :sessions
  get '/orderItems', to: "order_items#index"
  post '/orderItems', to: "order_items#create"
end
