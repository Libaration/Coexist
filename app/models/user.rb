class User < ApplicationRecord
  belongs_to :conversation
  validates_associated :conversation
end
