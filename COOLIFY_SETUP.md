# Coolify Setup Guide

## Build Pack Configuration

**Use: Docker (via Dockerfile)**

The project includes an optimized `Dockerfile` that:
- Uses multi-stage builds for smaller production images
- Automatically builds the entire application
- Includes health checks
- Works with Coolify's auto-deployment

## Step-by-Step Setup in Coolify

### 1. Connect Repository
- Click "Create New Service"
- Select "Docker" or "Git based service"
- Choose "GitHub" as source
- Select repository: `bluemogul1914/blue-mogul-enterprise`
- Branch: `main`

### 2. Select Build Method
- **Build Pack Type:** Docker (Dockerfile)
- Coolify will automatically detect and use the `Dockerfile`

### 3. Set Environment Variables
Go to service settings → Environment Variables and add:

**Required:**
```
DATABASE_URL=postgresql://username:password@hostname:port/database_name
NODE_ENV=production
```

**Optional:**
```
PORT=3000
HUBSPOT_ACCESS_TOKEN=your_token_here
```

### 4. Setup Database
- Create PostgreSQL database in Coolify
- Get connection string from database service
- Add connection string as `DATABASE_URL` environment variable
- Format: `postgresql://user:password@db-service-name:5432/database_name`

### 5. Configure Port & Domain
- **Internal Port:** 3000 (auto-detected from Dockerfile)
- **External Port:** Choose your public port or use Coolify's URL routing
- **Domain:** Connect your domain if available

### 6. Enable Auto-Deployment
- Turn on "Auto-deploy on git push"
- Coolify will automatically rebuild and redeploy when you push to `main` branch

### 7. Database Migrations (Optional)
If you need to run migrations on startup:
- Go to service settings
- Add "Pre-deploy command": `npm run db:push`
- This will run before the application starts

## Deployment Process

When you push to GitHub:
1. GitHub webhook triggers Coolify
2. Coolify pulls the latest code
3. Docker builds the image using `Dockerfile`
4. New image is deployed
5. Health checks verify the service is running
6. Database migrations run (if configured)

## Monitoring & Logs

In Coolify dashboard:
- **Logs:** View real-time application logs
- **Health:** Monitor container health status
- **Restart:** Can restart service manually if needed
- **Rollback:** Can revert to previous deployment

## Database Setup with Coolify PostgreSQL

If using Coolify's PostgreSQL:
1. Create PostgreSQL service in Coolify
2. Get the service name (e.g., `postgres-abc123`)
3. Connection string format:
   ```
   postgresql://username:password@postgres-abc123:5432/database_name
   ```
4. Add as `DATABASE_URL` environment variable

## Common Issues

### Build Fails
- Check Docker build logs in Coolify
- Ensure all environment variables are set
- Verify `npm ci` and `npm run build` succeed

### Application Won't Start
- Check health check logs
- Verify `DATABASE_URL` is correct
- Check application logs in Coolify

### Database Connection Fails
- Verify PostgreSQL service is running
- Check `DATABASE_URL` format
- Ensure database name exists
- Check username and password

## Next Steps

1. Push code to GitHub (already done ✅)
2. Go to your Coolify instance
3. Add the repository
4. Configure environment variables
5. Set up PostgreSQL database
6. Enable auto-deploy
7. Test deployment

Your application will be live and auto-updated whenever you push to the `main` branch!
