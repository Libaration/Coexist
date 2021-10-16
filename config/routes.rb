Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'events#index'
  namespace :api do
    namespace :v1 do
      resources :conversations, only: [:index, :create]
    end
  end
  mount ActionCable.server => '/cable'
end
