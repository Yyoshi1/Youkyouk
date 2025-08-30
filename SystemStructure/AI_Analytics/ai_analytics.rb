class AIAnalytics
  def self.run_recommendations
    # 
    AIService.generate_recommendations
  end

  def self.generate_reports
    AnalyticsService.generate_full_report
  end
end
