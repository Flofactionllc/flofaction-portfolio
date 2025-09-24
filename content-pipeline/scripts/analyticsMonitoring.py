
        # Analytics Monitoring Script
        from googleapiclient.discovery import build
        import pandas as pd
        from datetime import datetime, timedelta
        
        class AnalyticsMonitor:
            def __init__(self, credentials_file):
                self.youtube = build('youtubeAnalytics', 'v2', credentials=credentials_file)
            
            def get_channel_metrics(self, channel_id, start_date, end_date):
                request = self.youtube.reports().query(
                    ids=f'channel=={channel_id}',
                    startDate=start_date,
                    endDate=end_date,
                    metrics='views,estimatedMinutesWatched,averageViewDuration,subscribersGained,subscribersLost',
                    dimensions='day'
                )
                
                return request.execute()
            
            def get_video_performance(self, video_id):
                request = self.youtube.videos().list(
                    part='statistics,snippet',
                    id=video_id
                )
                
                return request.execute()
            
            def generate_performance_report(self, channel_id):
                end_date = datetime.now().strftime('%Y-%m-%d')
                start_date = (datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')
                
                metrics = self.get_channel_metrics(channel_id, start_date, end_date)
                
                report = {
                    'period': f'{start_date} to {end_date}',
                    'total_views': sum(row[1] for row in metrics['rows']),
                    'total_watch_time': sum(row[2] for row in metrics['rows']),
                    'average_duration': sum(row[3] for row in metrics['rows']) / len(metrics['rows']),
                    'subscriber_growth': sum(row[4] for row in metrics['rows']) - sum(row[5] for row in metrics['rows'])
                }
                
                return report
      