# Deployment Checklist

## Pre-Deployment Setup

### 1. Supabase Setup
- [ ] Create Supabase project
- [ ] Run database schema from `lib/supabase/schema.sql`
- [ ] Verify RLS policies are enabled
- [ ] Create storage bucket `user-documents`
- [ ] Configure authentication providers
- [ ] Copy project URL and API keys

### 2. Sanity Setup
- [ ] Create Sanity project
- [ ] Deploy Sanity Studio: `cd sanity && npx sanity deploy`
- [ ] Add CORS origins in Sanity dashboard (your production URL)
- [ ] Copy project ID and dataset name
- [ ] Generate API token with read permissions

### 3. Flex API
- [ ] Obtain API credentials
- [ ] Test API connection
- [ ] Document available endpoints

### 4. Resend Setup
- [ ] Create Resend account
- [ ] Verify domain (or use resend.dev for testing)
- [ ] Generate API key
- [ ] Configure sender email

### 5. Vercel Setup
- [ ] Connect GitHub repository
- [ ] Configure framework preset (Next.js)
- [ ] Set up production and preview environments

## Environment Variables

Add all environment variables in Vercel dashboard:

### Required Variables
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
FLEX_API_KEY=
FLEX_API_URL=
RESEND_API_KEY=
NEXT_PUBLIC_SITE_URL=https://your-domain.com
ADMIN_EMAIL=admin@your-domain.com
```

## Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Configure project settings

3. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all required variables
   - Apply to Production, Preview, and Development

4. **Deploy**
   - Trigger deployment
   - Wait for build to complete
   - Check deployment logs for errors

5. **Configure Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed
   - Wait for DNS propagation

## Post-Deployment Testing

### Functional Tests
- [ ] Homepage loads correctly
- [ ] Navigation works on all pages
- [ ] Equipment catalog displays
- [ ] Contact form submits successfully
- [ ] User can sign up
- [ ] User can log in
- [ ] Dashboard loads for authenticated users
- [ ] Admin dashboard loads for admin users
- [ ] Sanity Studio accessible at /studio
- [ ] Email notifications sent correctly

### Security Tests
- [ ] HTTPS enabled (SSL certificate)
- [ ] Security headers present
- [ ] Authentication works correctly
- [ ] Unauthorized access blocked
- [ ] Rate limiting functional
- [ ] CORS configured correctly
- [ ] No environment variables exposed in client

### Performance Tests
- [ ] Lighthouse score > 90
- [ ] Images optimized
- [ ] Page load time < 3s
- [ ] Mobile responsive
- [ ] No console errors

### SEO Tests
- [ ] Meta tags present on all pages
- [ ] Sitemap.xml accessible
- [ ] Robots.txt accessible
- [ ] OpenGraph images working
- [ ] Structured data valid

## Monitoring Setup

### Vercel Analytics
- [ ] Enable Vercel Analytics in project settings
- [ ] Monitor real user metrics

### Error Tracking (Optional)
- [ ] Set up Sentry or similar service
- [ ] Configure error alerts

### Uptime Monitoring (Optional)
- [ ] Set up uptime monitoring (UptimeRobot, etc.)
- [ ] Configure alerts for downtime

## Maintenance

### Regular Tasks
- [ ] Monitor error logs weekly
- [ ] Review and respond to inquiries daily
- [ ] Update content in Sanity CMS as needed
- [ ] Review database usage in Supabase
- [ ] Check API rate limits

### Security Updates
- [ ] Update dependencies monthly: `npm update`
- [ ] Review security vulnerabilities: `npm audit`
- [ ] Rotate API keys quarterly
- [ ] Review user access logs

### Backup Strategy
- [ ] Supabase: Automated daily backups (included)
- [ ] Sanity: Export content periodically
- [ ] Code: Version controlled in Git

## Rollback Procedure

If deployment fails or issues arise:

1. **Instant Rollback**
   - Go to Vercel Deployments
   - Find previous working deployment
   - Click "Promote to Production"

2. **Code Rollback**
   ```bash
   git revert HEAD
   git push origin main
   ```

3. **Database Rollback**
   - Use Supabase point-in-time recovery
   - Restore from backup

## Support Contacts

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Supabase Support**: [supabase.com/support](https://supabase.com/support)
- **Sanity Support**: [sanity.io/help](https://sanity.io/help)
- **Resend Support**: [resend.com/docs](https://resend.com/docs)

## Success Criteria

Deployment is successful when:
- ✅ Site is accessible via production URL
- ✅ All authentication flows work
- ✅ Database operations successful
- ✅ Email notifications sent
- ✅ No critical errors in logs
- ✅ Performance metrics meet targets
- ✅ Security headers configured
- ✅ SSL certificate active

---

**Deployed by**: _____________
**Deployment Date**: _____________
**Production URL**: _____________

