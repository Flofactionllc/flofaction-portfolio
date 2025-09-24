
        # YouTube Analytics Monitoring
        import pandas as pd
        from googleapiclient.discovery import build
        
        class YouTubeAnalytics:
            def __init__(self, channel_id, credentials_file):
                self.channel_id = channel_id
                self.youtube = build('youtubeAnalytics', 'v2', credentials=credentials_file)
            
            def get_channel_metrics(self, start_date, end_date):
                request = self.youtube.reports().query(
                    ids='channel==MINE',
                    startDate=start_date,
                    endDate=end_date,
                    metrics='views,estimatedMinutesWatched,averageViewDuration,subscribersGained',
                    dimensions='day'
                )
                
                return request.execute()
      