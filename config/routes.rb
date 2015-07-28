Rails.application.routes.draw do

  

  

  get "signup" => 'users#new'
  get "contact" => 'static_pages#contact'
  get "quiz" =>  'scores#new'
  post "quiz" => 'scores#create'
  get "leaderboard" => 'scores#index'
  get "login" => 'sessions#new'
  post "login" => 'sessions#create'
  delete "logout" => 'sessions#destroy'
  get "logcheck" => "static_pages#logcheck"
  get 'edit' => "users#edit"
  post "edit" => "users#update"
  root 'static_pages#home'
  get 'quiz_timezones' => "scores_tzs#new"
  post 'quiz_timezones' => "scores_tzs#create"
  get 'leaderboard_timezones' => "scores_tzs#index"
  get 'logcheck_tz' => "static_pages#logcheck_tz"
  get "leader_select" => "static_pages#leader_select"

  resources :users
  resources :scores
  resources :scores_tzs

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
