require_relative "boot"
require "rails/all"

Bundler.require(*Rails.groups)

module Youkyouk
  class Application < Rails::Application
    config.load_defaults 7.0
    config.time_zone = "UTC"
    config.active_record.schema_format = :sql
    config.generators.system_tests = nil

    # Custom config
    config.x.enable_ai = ENV['ENABLE_AI'] == 'true'
    config.x.enable_dynamic_pricing = ENV['ENABLE_DYNAMIC_PRICING'] == 'true'
    config.x.enable_trip_scheduler = ENV['ENABLE_TRIP_SCHEDULER'] == 'true'
    config.x.enable_editor_sync = ENV['ENABLE_EDITOR_SYNC'] == 'true'
  end
end
